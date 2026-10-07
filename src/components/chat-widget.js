"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { isFirebaseConfigured } from "@/lib/firebase";
import { profile } from "@/lib/profile-data";
import {
  MAX_MESSAGE_LENGTH,
  ensureVisitorAuth,
  markThreadReadForVisitor,
  sendVisitorMessage,
  subscribeToThreadMessages,
  subscribeToVisitorChatMeta
} from "@/lib/chat-service";

function formatTime(timestamp) {
  if (!timestamp || typeof timestamp.toDate !== "function") return "";
  return timestamp.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function notifyFirstMessage(chatId, text) {
  fetch("/api/chat/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId, text, website: "" })
  }).catch(() => {});
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [visitorId, setVisitorId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("idle");
  const [visitorUnread, setVisitorUnread] = useState(0);
  const bottomRef = useRef(null);
  const notifiedRef = useRef(false);
  const unsubscribeRef = useRef([]);

  useEffect(() => {
    if (!isFirebaseConfigured) return undefined;
    let active = true;
    let chatUnsubscribe = () => {};

    ensureVisitorAuth()
      .then((user) => {
        if (!active) return;
        setVisitorId(user.uid);
        setStatus("ready");
        chatUnsubscribe = subscribeToVisitorChatMeta(
          user.uid,
          (meta) => setVisitorUnread(meta?.visitorUnread || 0),
          () => {}
        );
      })
      .catch(() => {
        if (active) setStatus("unavailable");
      });

    return () => {
      active = false;
      chatUnsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!open || !visitorId) return undefined;
    const unsubscribe = subscribeToThreadMessages(
      visitorId,
      (nextMessages) => {
        setMessages(nextMessages);
        markThreadReadForVisitor(visitorId).catch(() => {});
      },
      () => setStatus("unavailable")
    );
    unsubscribeRef.current.push(unsubscribe);
    return () => {
      unsubscribe();
      unsubscribeRef.current = unsubscribeRef.current.filter((item) => item !== unsubscribe);
    };
  }, [open, visitorId]);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  async function handleSend(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || !visitorId || sending) return;
    setSending(true);
    try {
      await sendVisitorMessage(visitorId, text);
      setDraft("");
      if (!notifiedRef.current) {
        notifiedRef.current = true;
        notifyFirstMessage(visitorId, text);
      }
    } catch (error) {
      setStatus("unavailable");
      console.error(error);
    } finally {
      setSending(false);
    }
  }

  const panel = open ? (
    <div
      className="fixed bottom-24 right-4 z-50 flex h-[26rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-md border border-ink/10 bg-surface shadow-soft"
      role="dialog"
      aria-label="Chat with Elvis"
    >
      <div className="flex items-center gap-3 border-b border-ink/10 bg-white px-4 py-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-black">Elvis Bitolo</p>
          <p className="truncate text-xs text-ink/62">
            {status === "ready" ? "Typically replies within a day" : "Connecting..."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close chat"
          className="focus-ring rounded-md p-2 text-ink/62 hover:text-ink"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        <div className="max-w-[85%] rounded-md rounded-tl-none bg-white px-3 py-2 text-sm leading-6 shadow-sm">
          Hi! I&apos;m Elvis, a full-stack developer in Nairobi. Ask me about web projects,
          availability, or anything else.
        </div>
        {status === "unavailable" ? (
          <div className="rounded-md border border-copper/30 bg-copper/10 px-3 py-2 text-sm leading-6 text-ink/75">
            Live chat is unavailable right now. Email{" "}
            <a className="font-bold underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>{" "}
            instead.
          </div>
        ) : null}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[85%] rounded-md px-3 py-2 text-sm leading-6 shadow-sm ${
              message.sender === "visitor"
                ? "ml-auto rounded-tr-none bg-moss text-white"
                : "rounded-tl-none bg-white"
            }`}
          >
            <p className="whitespace-pre-wrap break-words">{message.text}</p>
            <p
              className={`mt-1 text-[10px] ${
                message.sender === "visitor" ? "text-white/70" : "text-ink/50"
              }`}
            >
              {formatTime(message.createdAt)}
            </p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="border-t border-ink/10 bg-white px-3 py-3">
        <div className="flex items-end gap-2">
          <textarea
            rows={1}
            value={draft}
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleSend(event);
              }
            }}
            placeholder="Type a message..."
            aria-label="Message"
            className="focus-ring max-h-24 min-h-10 flex-1 resize-none rounded-md border border-ink/10 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={!draft.trim() || sending || status !== "ready"}
            aria-label="Send message"
            className="focus-ring rounded-md bg-ink p-2.5 text-white hover:bg-moss disabled:opacity-40"
          >
            <Send size={16} />
          </button>
        </div>
        <p className="mt-2 text-[10px] leading-4 text-ink/50">
          Don&apos;t share sensitive information. Messages are stored until I reply.
        </p>
      </form>
    </div>
  ) : null;

  return (
    <>
      {panel}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close chat" : "Chat with Elvis"}
        className="focus-ring no-print fixed bottom-6 right-4 z-50 rounded-full bg-ink p-4 text-white shadow-soft hover:bg-moss"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && visitorUnread > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-copper text-[10px] font-black text-white">
            {visitorUnread > 9 ? "9+" : visitorUnread}
          </span>
        ) : null}
      </button>
    </>
  );
}
