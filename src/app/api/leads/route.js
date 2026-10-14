const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_NAME = 120;
const MAX_MESSAGE = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const name = clean(body?.name, MAX_NAME);
  const email = clean(body?.email, MAX_NAME);
  const phone = clean(body?.phone, MAX_NAME);
  const interest = clean(body?.interest, MAX_NAME);
  const message = clean(body?.message, MAX_MESSAGE);

  // Honeypot: a real visitor never fills this hidden field.
  if (body?.website) {
    return Response.json({ ok: true, notified: false });
  }

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json(
      { ok: false, error: "Please provide your name, a valid email and a message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail =
    process.env.LEAD_NOTIFY_EMAIL || process.env.CHAT_NOTIFY_EMAIL;

  if (!apiKey || !notifyEmail) {
    // Lead is still captured in Firestore from the client when configured.
    return Response.json({ ok: true, notified: false });
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Portfolio Leads <onboarding@resend.dev>",
        to: [notifyEmail],
        reply_to: email,
        subject: `New enquiry${interest ? `: ${interest}` : ""} — ${name}`,
        text: [
          "A new enquiry came in from your portfolio.",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone/WhatsApp: ${phone}` : null,
          interest ? `Interested in: ${interest}` : null,
          "",
          message
        ]
          .filter(Boolean)
          .join("\n")
      })
    });

    if (!response.ok) {
      console.error("Lead notify failed:", response.status, await response.text());
      return Response.json({ ok: true, notified: false });
    }
    return Response.json({ ok: true, notified: true });
  } catch (error) {
    console.error("Lead notify error:", error);
    return Response.json({ ok: true, notified: false });
  }
}
