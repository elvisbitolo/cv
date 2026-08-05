"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

export function ContactSection({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hi Elvis, my name is ${form.name}.\n\n${form.message}\n\nContact: ${form.email}`
    );
    window.open(`${profile.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
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
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm font-black text-moss">
              <Mail size={18} />
              {profile.email}
            </a>
            {profile.whatsapp ? (
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            ) : null}
          </div>
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
          <p className="text-sm font-bold text-ink/62">
            Fill this in and it opens WhatsApp with your message ready to send.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
          <button className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110">
            <Send size={17} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
