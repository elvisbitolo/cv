"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { createContactMessage } from "@/lib/firestore-service";
import { isFirebaseConfigured } from "@/lib/firebase";

export function ContactSection({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isFirebaseConfigured) {
      setStatus("firebase-missing");
      return;
    }
    setStatus("saving");
    try {
      await createContactMessage(form);
      setForm({ name: "", email: "", message: "" });
      setStatus("saved");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-copper">Contact</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let&rsquo;s build something useful</h2>
          <p className="mt-4 leading-7 text-ink/68">
            Send a message for cloud projects, web development, collaboration, or technical content work.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-moss">
            <Mail size={18} />
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-md border border-ink/10 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-md border border-ink/10 bg-paper p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="focus-ring min-h-12 rounded-md border border-ink/10 bg-surface px-3"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="focus-ring min-h-12 rounded-md border border-ink/10 bg-surface px-3"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-bold">
            Message
            <textarea
              required
              rows={7}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="focus-ring resize-y rounded-md border border-ink/10 bg-surface p-3"
            />
          </label>
          <button
            disabled={status === "saving"}
            className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
          >
            <Send size={17} />
            {status === "saving" ? "Sending" : "Send Message"}
          </button>
          {status === "saved" ? <p className="mt-3 text-sm font-bold text-moss">Message saved successfully.</p> : null}
          {status === "firebase-missing" ? (
            <p className="mt-3 text-sm font-bold text-copper">Message form needs Firebase environment variables. Please email me instead.</p>
          ) : null}
          {status === "error" ? <p className="mt-3 text-sm font-bold text-copper">Message could not be saved. Check Firebase rules.</p> : null}
        </form>
      </div>
    </section>
  );
}
