"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import {
  MAX_MESSAGE_LENGTH,
  markThreadReadForAdmin,
  sendAdminMessage,
  subscribeToChatThreads,
  subscribeToThreadMessages
} from "@/lib/chat-service";

function formatWhen(timestamp) {
  if (!timestamp || typeof timestamp.toDate !== "function") return "";
  const date = timestamp.toDate();
  const today = new Date();
  const sameDay = date.toDateString() === today.toDateString();
  if (sameDay) return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return date.toLocaleDateString([], { day: "numeric", month: "short" });
}

export default function AdminChatInbox() {
  const [threads, setThreads] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [threadState, setThreadState] = useState({ id: null, messages: [] });
  const messages = useMemo(
    () => (threadState.id === selectedId ? threadState.messages : []),
    [threadState, selectedId]
  );
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    const unsubscribe = subscribeToChatThreads(
      setThreads,
      () => setError("Could not load chats. Check Firestore rules.")
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!selectedId) return undefined;
    markThreadReadForAdmin(selectedId).catch(() => {});
    const unsubscribe = subscribeToThreadMessages(
      selectedId,
      (nextMessages) => setThreadState({ id: selectedId, messages: nextMessages }),
      () => setError("Could not load thread messages.")
    );
    return unsubscribe;
  }, [selectedId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, selectedId]);

  async function handleReply(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || !selectedId || sending) return;
    setSending(true);
    try {
      await sendAdminMessage(selectedId, text);
      setDraft("");
    } catch (sendError) {
      console.error(sendError);
      setError("Reply failed. Check Firestore rules.");
    } finally {
      setSending(false);
    }
  }

  const totalUnread = threads.reduce((sum, thread) => sum + (thread.unread || 0), 0);

  return (
    <section className="rounded-md border border-ink/10 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-moss/10 p-2 text-moss">
            <MessageSquare size={20} />
          </div>
          <div>
            <h2 className="text-xl font-black">Visitor chats</h2>
            <p className="text-sm text-ink/62">
              {threads.length} thread{threads.length === 1 ? "" : "s"}
              {totalUnread > 0 ? ` - ${totalUnread} unread` : ""}
            </p>
          </div>
        </div>
      </div>

      {error ? <p className="mt-4 text-sm font-bold text-copper">{error}</p> : null}

      <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="max-h-96 overflow-y-auto rounded-md border border-ink/10">
          {threads.length === 0 ? (
            <p className="p-4 text-sm text-ink/62">No conversations yet.</p>
          ) : (
            threads.map((thread) => (
              <button
                key={thread.id}
                type="button"
                onClick={() => setSelectedId(thread.id)}
                className={`focus-ring block w-full border-b border-ink/10 px-4 py-3 text-left last:border-b-0 ${
                  selectedId === thread.id ? "bg-moss/10" : "hover:bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-xs font-black">
                    Visitor {thread.id.slice(0, 8)}
                  </span>
                  <span className="shrink-0 text-[10px] text-ink/50">
                    {formatWhen(thread.updatedAt)}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-ink/75">{thread.lastMessage}</p>
                {thread.unread > 0 ? (
                  <span className="mt-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-copper px-1 text-[10px] font-black text-white">
                    {thread.unread}
                  </span>
                ) : null}
              </button>
            ))
          )}
        </div>

        <div className="flex min-h-72 flex-col rounded-md border border-ink/10">
          {!selectedId ? (
            <p className="flex flex-1 items-center justify-center p-4 text-sm text-ink/62">
              Select a conversation to reply.
            </p>
          ) : (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                <p className="text-center text-[10px] font-bold uppercase tracking-wider text-ink/45">
                  Visitor {selectedId.slice(0, 8)}
                </p>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`max-w-[85%] rounded-md px-3 py-2 text-sm leading-6 ${
                      message.sender === "admin"
                        ? "ml-auto rounded-tr-none bg-ink text-white"
                        : "rounded-tl-none bg-paper"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">{message.text}</p>
                    <p
                      className={`mt-1 text-[10px] ${
                        message.sender === "admin" ? "text-white/70" : "text-ink/50"
                      }`}
                    >
                      {formatWhen(message.createdAt)}
                    </p>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
              <form onSubmit={handleReply} className="flex items-end gap-2 border-t border-ink/10 px-3 py-3">
                <textarea
                  rows={1}
                  value={draft}
                  maxLength={MAX_MESSAGE_LENGTH}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      handleReply(event);
                    }
                  }}
                  placeholder="Reply to visitor..."
                  aria-label="Reply"
                  className="focus-ring max-h-24 min-h-10 flex-1 resize-none rounded-md border border-ink/10 px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || sending}
                  aria-label="Send reply"
                  className="focus-ring rounded-md bg-ink p-2.5 text-white hover:bg-moss disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
