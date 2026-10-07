const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_TEXT_LENGTH = 500;
const ADMIN_URL = "https://elvis-bitolo.vercel.app/admin";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { chatId, text, website } = body ?? {};

  if (website) {
    return Response.json({ ok: true, notified: false });
  }
  if (typeof chatId !== "string" || !/^[a-zA-Z0-9_-]{10,64}$/.test(chatId)) {
    return Response.json({ ok: false, error: "Invalid chat id." }, { status: 400 });
  }
  if (typeof text !== "string" || !text.trim() || text.length > MAX_TEXT_LENGTH) {
    return Response.json({ ok: false, error: "Invalid message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CHAT_NOTIFY_EMAIL;
  if (!apiKey || !notifyEmail) {
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
        from: "Portfolio Chat <onboarding@resend.com>",
        to: [notifyEmail],
        reply_to: notifyEmail,
        subject: "New chat message on your portfolio",
        text: `A visitor started a chat on elvis-bitolo.vercel.app.\n\nVisitor: ${chatId}\n\n"${text.trim()}"\n\nReply in the admin inbox: ${ADMIN_URL}`
      })
    });
    if (!response.ok) {
      console.error("Chat notify failed:", response.status, await response.text());
      return Response.json({ ok: true, notified: false });
    }
    return Response.json({ ok: true, notified: true });
  } catch (error) {
    console.error("Chat notify error:", error);
    return Response.json({ ok: true, notified: false });
  }
}
