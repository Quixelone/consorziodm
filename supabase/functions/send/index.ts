const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const TO_EMAIL = "info@consorziodelmediterraneo.it";
const WHISTLEBLOWING_EMAIL = "odvcdmscarl@gmail.com";
const FROM_EMAIL = "noreply@consorziodelmediterraneo.it";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function sendEmail(payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error ${res.status}: ${text}`);
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { type, ...data } = body;

    if (type === "contact") {
      const { name, company, entityType, email, message } = data;

      await sendEmail({
        from: `Consorzio DM <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: "Nuova richiesta dal sito",
        html: `
          <h2>Richiesta di contatto</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Nome:</td><td>${name}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Azienda:</td><td>${company || "-"}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Tipologia:</td><td>${entityType || "-"}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Messaggio:</td><td>${message || "-"}</td></tr>
          </table>
        `,
        reply_to: email,
      });
    }

    if (type === "whistleblowing") {
      const { category, description, name, email, isAnonymous } = data;

      await sendEmail({
        from: `Consorzio DM - WB <${FROM_EMAIL}>`,
        to: [WHISTLEBLOWING_EMAIL],
        subject: "⚠️ Segnalazione Whistleblowing",
        html: `
          <h2 style="color:#dc2626;">Segnalazione Whistleblowing</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Anonima:</td><td>${isAnonymous ? "Sì" : "No"}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Categoria:</td><td>${category}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Descrizione:</td><td style="white-space:pre-wrap;">${description}</td></tr>
            ${!isAnonymous ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Nome:</td><td>${name || "-"}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email:</td><td>${email || "-"}</td></tr>` : ""}
          </table>
          <p style="margin-top:16px;font-size:12px;color:#666;">D.Lgs. 24/2023 — Dati riservati al Responsabile Whistleblowing.</p>
        `,
        reply_to: isAnonymous ? undefined : email || undefined,
      });
    }

    return Response.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500, headers: corsHeaders });
  }
});
