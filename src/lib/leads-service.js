"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function createLead(lead) {
  if (!db) return false;
  await addDoc(collection(db, "leads"), {
    name: lead.name || "",
    email: lead.email || "",
    phone: lead.phone || "",
    interest: lead.interest || "",
    message: lead.message || "",
    createdAt: serverTimestamp(),
    status: "new"
  });
  return true;
}
