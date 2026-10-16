// POST /api/subscribe — emails the free cheat sheet link via Resend and
// tells hello@ who signed up (the inbox is the subscriber list; no database).
// Needs the Pages secret RESEND_API_KEY.

const FROM = "Heat Press Settings <hello@heatpress-settings.co.uk>";
const OWNER = "hello@heatpress-settings.co.uk";
const PDF_URL = "https://heatpress-settings.co.uk/downloads/heat-press-settings-cheat-sheet.pdf";
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[a-z]{2,}$/i;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

async function readBody(request) {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) return await request.json();
  const form = await request.formData();
  return Object.fromEntries(form);
}

async function send(key, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) { const e = new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`); e.status = res.status; throw e; }
  return res.json();
}

export function subscriberEmail(to) {
  return {
    from: FROM,
    to: [to],
    reply_to: OWNER,
    subject: "Your heat press settings cheat sheet",
    headers: { "List-Unsubscribe": `<mailto:${OWNER}?subject=unsubscribe>` },
    text: `Thanks for asking for the cheat sheet.\n\nDownload the PDF here:\n${PDF_URL}\n\nIt lists the temperatures, times, pressures and peels from the manufacturer charts quoted on heatpress-settings.co.uk. Always test on a scrap first, and follow the instructions for the film or blank in your hand.\n\nWe will only email you about heatpress-settings.co.uk. To unsubscribe, just reply with "unsubscribe" and we will delete your address.\n\nHeat Press Settings\nhttps://heatpress-settings.co.uk/`,
    html: `<div style="font-family:Arial,Helvetica,sans-serif;color:#1c1b19;max-width:520px;line-height:1.5">
<div style="background:#242220;color:#f7f4ef;padding:14px 18px;font-family:Georgia,serif;font-size:18px">Heat press settings</div>
<div style="padding:18px;border:1px solid #d5d8db;border-top:0">
<p>Thanks for asking for the cheat sheet.</p>
<p><a href="${PDF_URL}" style="display:inline-block;background:#f0a04a;color:#1c1b19;padding:10px 16px;text-decoration:none;font-weight:bold;border-radius:4px">Download the cheat sheet (PDF)</a></p>
<p>It lists the temperatures, times, pressures and peels from the manufacturer charts quoted on the site. Always test on a scrap first, and follow the instructions for the film or blank in your hand.</p>
<p style="font-size:13px;color:#4e4b47">We will only email you about heatpress-settings.co.uk. To unsubscribe, reply with &ldquo;unsubscribe&rdquo; and we will delete your address. <a href="https://heatpress-settings.co.uk/privacy/" style="color:#9a4e08">Privacy notice</a>.</p>
</div></div>`
  };
}

export async function onRequestPost({ request, env }) {
  let data;
  try { data = await readBody(request); } catch { return json({ ok: false, error: "Bad request." }, 400); }
  // Honeypot: bots fill the hidden "website" field. Pretend success.
  if (data.website) return json({ ok: true });
  const email = String(data.email || "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400);
  }
  if (!env.RESEND_API_KEY) return json({ ok: false, error: "Signup is not set up yet. Please try again later." }, 503);

  try {
    await send(env.RESEND_API_KEY, subscriberEmail(email));
  } catch (err) {
    console.log("subscriber send failed", String(err));
    return json({ ok: false, error: "Sorry, we could not send the email just now. Please try again later.", code: err.status || "fetch" }, 500);
  }
  const page = String(data.page || "").slice(0, 200);
  try {
    await send(env.RESEND_API_KEY, {
      from: FROM,
      to: [OWNER],
      reply_to: email,
      subject: `New cheat sheet subscriber: ${email}`,
      text: `New cheat sheet signup\n\nEmail: ${email}\nPage: ${page || "unknown"}\nTime: ${new Date().toISOString()}\n\nKeep this email as your record of consent. If they reply "unsubscribe", delete this email.`
    });
  } catch (err) {
    console.log("owner notify failed", String(err));
  }
  return json({ ok: true });
}

export function onRequest() {
  return json({ ok: false, error: "Use POST." }, 405);
}
