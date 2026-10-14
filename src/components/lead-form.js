"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { createLead } from "@/lib/leads-service";
import { profile } from "@/lib/profile-data";

export default function LeadForm({
  interestOptions = [],
  defaultInterest = "",
  heading = "Get a free quote",
  subheading = "Tell me what you need. I reply with an honest answer, a price and a timeline — the first consultation is free."
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: defaultInterest,
    message: "",
    website: ""
  });
  const [status, setStatus] = useState("idle");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (form.website) return;

    setStatus("sending");

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      interest: form.interest,
      message: form.message
    };

    try {
      await createLead(payload).catch(() => false);
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const whatsappText = encodeURIComponent(
    `Hi Elvis, I'm interested${form.interest ? ` in ${form.interest}` : ""}. ${form.message}`.trim()
  );

  if (status === "done") {
    return (
      <div className="rounded-md border border-ink/10 bg-surface p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-moss" />
        <h3 className="mt-4 text-2xl font-black text-ink">Thanks — message received.</h3>
        <p className="mt-3 leading-7 text-ink/68">
          I&rsquo;ll get back to you shortly. In a hurry? Message me directly on
          WhatsApp.
        </p>
        <a
          href={`${profile.whatsapp}?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
        >
          <MessageCircle size={17} />
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-ink/10 bg-surface p-6 sm:p-8">
      <h3 className="text-xl font-black text-ink">{heading}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/68">{subheading}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="focus-ring min-h-12 rounded-md border border-ink/10 bg-paper px-3"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="focus-ring min-h-12 rounded-md border border-ink/10 bg-paper px-3"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          WhatsApp / phone <span className="font-normal text-ink/50">(optional)</span>
          <input
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="focus-ring min-h-12 rounded-md border border-ink/10 bg-paper px-3"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          What do you need?
          {interestOptions.length ? (
            <select
              value={form.interest}
              onChange={(event) => update("interest", event.target.value)}
              className="focus-ring min-h-12 rounded-md border border-ink/10 bg-paper px-3"
            >
              <option value="">Select an option</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              value={form.interest}
              onChange={(event) => update("interest", event.target.value)}
              className="focus-ring min-h-12 rounded-md border border-ink/10 bg-paper px-3"
            />
          )}
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold">
        Project details
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="focus-ring resize-y rounded-md border border-ink/10 bg-paper p-3"
        />
      </label>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(event) => update("website", event.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" ? (
        <p className="mt-4 text-sm font-semibold text-copper">
          Something went wrong. Please try again, or message me on WhatsApp.
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          disabled={status === "sending"}
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss disabled:opacity-60 dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
        >
          <Send size={17} />
          {status === "sending" ? "Sending…" : "Request free quote"}
        </button>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-moss"
        >
          <MessageCircle size={17} />
          Or chat on WhatsApp
        </a>
      </div>
    </form>
  );
}
