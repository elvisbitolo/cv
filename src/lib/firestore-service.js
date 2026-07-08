"use client";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import { db } from "./firebase";

export async function getSiteProfile(fallbackProfile) {
  if (!db) return fallbackProfile;
  const snap = await getDoc(doc(db, "site", "profile"));
  return snap.exists() ? { ...fallbackProfile, ...snap.data() } : fallbackProfile;
}

export async function getProjects(fallbackProjects) {
  if (!db) return fallbackProjects;
  const projectsQuery = query(collection(db, "projects"), orderBy("rank", "asc"));
  const snap = await getDocs(projectsQuery);
  if (snap.empty) return fallbackProjects;
  return snap.docs.map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() }));
}

export async function saveProfile(profile) {
  if (!db) throw new Error("Firebase is not configured.");
  await setDoc(doc(db, "site", "profile"), profile, { merge: true });
}

export async function saveProject(project) {
  if (!db) throw new Error("Firebase is not configured.");
  const id = project.id || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  await setDoc(doc(db, "projects", id), project, { merge: true });
}

export async function createContactMessage(message) {
  if (!db) throw new Error("Firebase is not configured.");
  await addDoc(collection(db, "messages"), {
    ...message,
    createdAt: serverTimestamp(),
    status: "new"
  });
}
