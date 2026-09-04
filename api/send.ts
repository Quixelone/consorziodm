import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "info@consorziodelmediterraneo.it";
const WHISTLEBLOWING_EMAIL = "odvcdmscarl@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { type, ...data } = body;

    if (type === "contact") {
      const { name, company, entityType, email, message } = data;

      await resend.emails.send({
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
        replyTo: email,
      });
    }

    if (type === "whistleblowing") {
      const { category, description, name, email, isAnonymous } = data;

      await resend.emails.send({
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
        replyTo: isAnonymous ? undefined : email || undefined,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
