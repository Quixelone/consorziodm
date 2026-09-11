import { createClient } from "jsr:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const WHISTLEBLOWING_EMAIL = "odvcdmscarl@gmail.com";
const FROM_EMAIL = "noreply@consorziodelmediterraneo.it";
const SITE_URL = "https://www.consorziodelmediterraneo.it";

const TICKET_RE = /^WB-[A-Z0-9]{8}$/;
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Cache-Control": "no-store",
};

const db = createClient(SUPABASE_URL!, SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
});

function json(payload: unknown, status = 200) {
  return Response.json(payload, { status, headers: corsHeaders });
}

function generateTicket(): string {
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  let code = "";
  for (const b of bytes) code += ALPHABET[b % ALPHABET.length];
  return `WB-${code}`;
}

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

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function handlePost(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Richiesta non valida" }, 400);
  }

  const category = String(body.category ?? "").trim();
  const description = String(body.description ?? "").trim();
  const isAnonymous = body.isAnonymous === true;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();

  if (!category || !description) {
    return json({ error: "Categoria e descrizione obbligatorie" }, 400);
  }
  if (description.length < 10) {
    return json({ error: "La descrizione è troppo breve" }, 400);
  }
  if (!isAnonymous && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Email valida richiesta per segnalazioni non anonime" }, 400);
  }

  // Generate a unique ticket (retry on the extremely unlikely collision)
  let ticket = "";
  let report: { id: string } | null = null;
  for (let attempt = 0; attempt < 5; attempt++) {
    ticket = generateTicket();
    const { data, error } = await db.from("whistleblowing_reports").insert({
      ticket_code: ticket,
      category,
      description,
      is_anonymous: isAnonymous,
      reporter_name: isAnonymous ? null : name || null,
      reporter_email: isAnonymous ? null : email,
    }).select("id").single();

    if (error) {
      if (error.code === "23505") continue;
      console.error("Insert error:", error);
      return json({ error: "Errore nella registrazione della segnalazione" }, 500);
    }
    report = data;
    break;
  }
  if (!report) {
    return json({ error: "Errore nella registrazione della segnalazione" }, 500);
  }

  await db.from("whistleblowing_updates").insert({
    report_id: report.id,
    status: "ricevuta",
    message: "Segnalazione ricevuta e trasmessa al Responsabile Whistleblowing.",
  });

  const verifyLink = `${SITE_URL}/verifica-segnalazione?ticket=${ticket}`;

  // Notify the Responsible Officer
  await sendEmail({
    from: `Consorzio DM - WB <${FROM_EMAIL}>`,
    to: [WHISTLEBLOWING_EMAIL],
    subject: `⚠️ Nuova segnalazione Whistleblowing [${ticket}]`,
    html: `
      <h2 style="color:#dc2626;">Segnalazione Whistleblowing — ${ticket}</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Codice ticket:</td><td><b>${ticket}</b></td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Anonima:</td><td>${isAnonymous ? "Sì" : "No"}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Categoria:</td><td>${escapeHtml(category)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Descrizione:</td><td style="white-space:pre-wrap;">${escapeHtml(description)}</td></tr>
        ${!isAnonymous ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Nome:</td><td>${escapeHtml(name) || "-"}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email:</td><td>${escapeHtml(email)}</td></tr>` : ""}
      </table>
      <p style="margin-top:16px;font-size:12px;color:#666;">D.Lgs. 24/2023 — Dati riservati al Responsabile Whistleblowing.</p>
    `,
    reply_to: isAnonymous ? undefined : email || undefined,
  });

  // Confirmation email to identified reporters with magic link
  if (!isAnonymous) {
    await sendEmail({
      from: `Consorzio DM - WB <${FROM_EMAIL}>`,
      to: [email],
      subject: `Conferma ricezione segnalazione [${ticket}]`,
      html: `
        <h2>Segnalazione ricevuta</h2>
        <p>La Sua segnalazione è stata registrata con il codice di riferimento:</p>
        <p style="font-size:20px;font-weight:bold;letter-spacing:1px;">${ticket}</p>
        <p>Per verificare in qualsiasi momento lo stato di lavorazione può utilizzare il seguente link riservato:</p>
        <p><a href="${verifyLink}" style="background:#1a5632;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;display:inline-block;">Verifica stato segnalazione</a></p>
        <p style="margin-top:16px;font-size:12px;color:#666;">Conservi questo codice. Il contenuto della segnalazione non sarà mai visibile tramite il link di verifica.<br/>D.Lgs. 24/2023 — Dati riservati al Responsabile Whistleblowing.</p>
      `,
    });
  }

  return json({ success: true, ticket });
}

async function handleGet(req: Request) {
  const url = new URL(req.url);
  const raw = (url.searchParams.get("ticket") ?? "").trim().toUpperCase();

  if (!TICKET_RE.test(raw)) {
    return json({ found: false, error: "Formato codice non valido" }, 400);
  }

  const { data: report } = await db
    .from("whistleblowing_reports")
    .select("id, status, created_at, updated_at")
    .eq("ticket_code", raw)
    .maybeSingle();

  if (!report) {
    return json({ found: false }, 404);
  }

  const { data: updates } = await db
    .from("whistleblowing_updates")
    .select("status, message, created_at")
    .eq("report_id", (report as Record<string, unknown>).id as string)
    .order("created_at", { ascending: true });

  return json({
    found: true,
    status: report.status,
    createdAt: report.created_at,
    updatedAt: report.updated_at,
    updates: updates ?? [],
  });
}

// ===== ODV reserved area endpoints =====

const ODV_PASSWORD_HASH = Deno.env.get("ODV_PASSWORD_HASH");
const ODV_TOKEN_SECRET = Deno.env.get("ODV_TOKEN_SECRET");
const TOKEN_TTL_S = 8 * 3600;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MIN = 15;
const ALLOWED_STATUSES = ["ricevuta", "presa_in_carico", "verifica", "provvedimenti", "archiviata"];

function toHex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function sha256Hex(text: string): Promise<string> {
  return toHex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
}

async function hmacHex(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(ODV_TOKEN_SECRET!),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return toHex(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message)));
}

async function issueToken(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_S;
  return `${exp}.${await hmacHex(String(exp))}`;
}

async function verifyToken(req: Request): Promise<boolean> {
  if (!ODV_TOKEN_SECRET) return false;
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const [expStr, sig] = token.split(".");
  if (!expStr || !sig) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return false;
  try {
    return timingSafeEqualHex(sig.toLowerCase(), await hmacHex(expStr));
  } catch {
    return false;
  }
}

function clientIp(req: Request): string {
  return req.headers.get("cf-connecting-ip")
    ?? (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
}

async function handleOdvLogin(req: Request) {
  if (!ODV_PASSWORD_HASH) return json({ error: "Configurazione non presente" }, 500);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Richiesta non valida" }, 400);
  }
  const password = String(body.password ?? "");

  const ip = clientIp(req);
  const windowStart = new Date(Date.now() - LOCKOUT_WINDOW_MIN * 60_000).toISOString();
  const { count } = await db
    .from("odv_login_attempts")
    .select("*", { count: "exact", head: true })
    .eq("ip", ip)
    .gte("attempted_at", windowStart);

  if ((count ?? 0) >= MAX_LOGIN_ATTEMPTS) {
    return json({ error: "Troppi tentativi. Riprova tra qualche minuto." }, 429);
  }

  if (!password || !timingSafeEqualHex(await sha256Hex(password), ODV_PASSWORD_HASH)) {
    await db.from("odv_login_attempts").insert({ ip });
    return json({ error: "Password errata" }, 401);
  }

  await db.from("odv_login_attempts").delete().eq("ip", ip);
  return json({ success: true, token: await issueToken(), expiresIn: TOKEN_TTL_S });
}

async function requireAuth(req: Request): Promise<Response | null> {
  return (await verifyToken(req)) ? null : json({ error: "Non autorizzato" }, 401);
}

async function handleOdvReports(req: Request) {
  const denied = await requireAuth(req);
  if (denied) return denied;

  const { data, error } = await db
    .from("whistleblowing_reports")
    .select("ticket_code, status, category, is_anonymous, reporter_name, created_at, updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("ODV reports error:", error);
    return json({ error: "Errore di lettura" }, 500);
  }
  return json({ reports: data ?? [] });
}

async function handleOdvReport(req: Request) {
  const denied = await requireAuth(req);
  if (denied) return denied;

  const raw = (new URL(req.url).searchParams.get("ticket") ?? "").trim().toUpperCase();
  if (!TICKET_RE.test(raw)) return json({ error: "Formato codice non valido" }, 400);

  const { data: report } = await db
    .from("whistleblowing_reports")
    .select("id, ticket_code, status, category, description, is_anonymous, reporter_name, reporter_email, created_at, updated_at")
    .eq("ticket_code", raw)
    .maybeSingle();

  if (!report) return json({ error: "Segnalazione non trovata" }, 404);

  const { data: updates } = await db
    .from("whistleblowing_updates")
    .select("status, message, created_at")
    .eq("report_id", (report as Record<string, unknown>).id as string)
    .order("created_at", { ascending: true });

  return json({ report, updates: updates ?? [] });
}

async function handleOdvUpdate(req: Request) {
  const denied = await requireAuth(req);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Richiesta non valida" }, 400);
  }

  const ticket = String(body.ticket ?? "").trim().toUpperCase();
  const status = String(body.status ?? "");
  const message = String(body.message ?? "").trim();

  if (!TICKET_RE.test(ticket)) return json({ error: "Formato codice non valido" }, 400);
  if (!ALLOWED_STATUSES.includes(status)) return json({ error: "Stato non valido" }, 400);
  if (!message) return json({ error: "Messaggio obbligatorio" }, 400);

  const { data: report } = await db
    .from("whistleblowing_reports")
    .select("id")
    .eq("ticket_code", ticket)
    .maybeSingle();

  if (!report) return json({ error: "Segnalazione non trovata" }, 404);

  const { error } = await db
    .from("whistleblowing_reports")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", (report as Record<string, unknown>).id);

  if (error) {
    console.error("ODV update error:", error);
    return json({ error: "Errore di aggiornamento" }, 500);
  }

  await db.from("whistleblowing_updates").insert({
    report_id: (report as Record<string, unknown>).id,
    status,
    message,
  });

  return json({ success: true });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const path = new URL(req.url).pathname.replace(/\/+$/, "").split("/").pop() ?? "";

    switch (path) {
      case "odv-login":
        return req.method === "POST" ? await handleOdvLogin(req) : json({ error: "Method not allowed" }, 405);
      case "odv-reports":
        return req.method === "GET" ? await handleOdvReports(req) : json({ error: "Method not allowed" }, 405);
      case "odv-report":
        return req.method === "GET" ? await handleOdvReport(req) : json({ error: "Method not allowed" }, 405);
      case "odv-update":
        return req.method === "POST" ? await handleOdvUpdate(req) : json({ error: "Method not allowed" }, 405);
    }

    if (req.method === "POST") return await handlePost(req);
    if (req.method === "GET") return await handleGet(req);
    return json({ error: "Method not allowed" }, 405);
  } catch (error) {
    console.error("Whistleblowing function error:", error);
    return json({ error: "Errore interno del server" }, 500);
  }
});
