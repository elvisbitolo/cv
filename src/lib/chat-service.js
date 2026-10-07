"use client";

import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import { auth, db } from "./firebase";

const MAX_MESSAGE_LENGTH = 1000;
const MAX_MESSAGES_PER_THREAD = 200;

export function ensureVisitorAuth() {
  if (!auth) {
    return Promise.reject(new Error("Chat is not configured."));
  }
  if (auth.currentUser) {
    return Promise.resolve(auth.currentUser);
  }
  return signInAnonymously(auth);
}

export function subscribeToVisitorChatMeta(visitorId, callback, onError) {
  if (!db) return () => {};
  return onSnapshot(
    doc(db, "chats", visitorId),
    (snapshot) => callback(snapshot.exists() ? snapshot.data() : null),
    onError
  );
}

export function subscribeToThreadMessages(visitorId, callback, onError) {
  if (!db) return () => {};
  const messagesQuery = query(
    collection(db, "chats", visitorId, "messages"),
    orderBy("createdAt", "asc"),
    limit(MAX_MESSAGES_PER_THREAD)
  );
  return onSnapshot(
    messagesQuery,
    (snapshot) =>
      callback(snapshot.docs.map((messageDoc) => ({ id: messageDoc.id, ...messageDoc.data() }))),
    onError
  );
}

export async function sendVisitorMessage(visitorId, text) {
  if (!db) throw new Error("Chat is not configured.");
  const cleanText = text.trim();
  if (!cleanText) return;
  if (cleanText.length > MAX_MESSAGE_LENGTH) {
    throw new Error(`Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`);
  }

  const chatRef = doc(db, "chats", visitorId);
  await setDoc(
    chatRef,
    {
      visitorId,
      lastMessage: cleanText,
      lastSender: "visitor",
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      unread: increment(1),
      visitorUnread: 0
    },
    { merge: true }
  );

  await addDoc(collection(db, "chats", visitorId, "messages"), {
    text: cleanText,
    sender: "visitor",
    createdAt: serverTimestamp()
  });
}

export async function sendAdminMessage(visitorId, text) {
  if (!db) throw new Error("Chat is not configured.");
  const cleanText = text.trim();
  if (!cleanText) return;
  if (cleanText.length > MAX_MESSAGE_LENGTH) {
    throw new Error(`Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`);
  }

  await addDoc(collection(db, "chats", visitorId, "messages"), {
    text: cleanText,
    sender: "admin",
    createdAt: serverTimestamp()
  });

  await setDoc(
    doc(db, "chats", visitorId),
    {
      lastMessage: cleanText,
      lastSender: "admin",
      updatedAt: serverTimestamp(),
      unread: 0,
      visitorUnread: increment(1)
    },
    { merge: true }
  );
}

export function subscribeToChatThreads(callback, onError) {
  if (!db) return () => {};
  const threadsQuery = query(
    collection(db, "chats"),
    orderBy("updatedAt", "desc"),
    limit(50)
  );
  return onSnapshot(
    threadsQuery,
    (snapshot) =>
      callback(snapshot.docs.map((threadDoc) => ({ id: threadDoc.id, ...threadDoc.data() }))),
    onError
  );
}

export async function markThreadReadForAdmin(visitorId) {
  if (!db) return;
  await setDoc(doc(db, "chats", visitorId), { unread: 0 }, { merge: true });
}

export async function markThreadReadForVisitor(visitorId) {
  if (!db) return;
  await setDoc(doc(db, "chats", visitorId), { visitorUnread: 0 }, { merge: true });
}

export { MAX_MESSAGE_LENGTH };

export function watchAuthState(callback) {
  if (!auth) return () => {};
  return onAuthStateChanged(auth, callback);
}
