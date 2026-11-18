import { NextResponse, type NextRequest } from "next/server";
import { services } from "@/content/services";
import { SEDI_OPTIONS, validateContact, type ContactPayload } from "@/lib/contact";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MIN_FILL_MS = 3000;

// Limite best-effort per istanza: blocca invii ripetuti dallo stesso IP.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const str = (v: unknown, max = 4000) => (typeof v === "string" ? v.slice(0, max) : "");

export async function POST(req: NextRequest) {
  // Solo richieste provenienti dal sito stesso
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ ok: false, message: "Origine non consentita." }, { status: 403 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Richiesta non valida." }, { status: 400 });
  }

  const payload: ContactPayload = {
    nome: str(raw.nome, 200),
    azienda: str(raw.azienda, 200),
    email: str(raw.email, 200),
    telefono: str(raw.telefono, 40),
    sede: str(raw.sede, 40),
    servizio: str(raw.servizio, 80),
    messaggio: str(raw.messaggio, 4000),
    privacy: raw.privacy === true,
    website: str(raw.website, 200),
    startedAt: typeof raw.startedAt === "number" ? raw.startedAt : 0,
  };

  // Antispam: honeypot compilato o invio troppo rapido -> risposta neutra, nessun invio.
  if (payload.website || !payload.startedAt || Date.now() - payload.startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Hai inviato diverse richieste in poco tempo. Riprova tra qualche minuto." },
      { status: 429 },
    );
  }

  const errors = validateContact(
    payload,
    services.map((s) => s.slug),
  );
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contatti] RESEND_API_KEY non configurata: richiesta non inviata.");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Il servizio di invio online non è al momento attivo. Ti invitiamo a contattare lo studio via email o telefono.",
      },
      { status: 503 },
    );
  }

  const sede = SEDI_OPTIONS.find((s) => s.value === payload.sede)?.label ?? payload.sede;
  const servizio = services.find((s) => s.slug === payload.servizio)?.title ?? "Altro / da definire";

  const rows: [string, string][] = [
    ["Nome e cognome", payload.nome.trim()],
    ["Azienda", payload.azienda.trim() || "—"],
    ["Email", payload.email.trim()],
    ["Telefono", payload.telefono.trim()],
    ["Sede preferita", sede],
    ["Servizio di interesse", servizio],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessaggio:\n${payload.messaggio.trim()}\n\n— Richiesta inviata dal modulo contatti del sito Studio Rosini. Presa visione dell'informativa privacy: sì.`;

  const html = `<!doctype html><html lang="it"><body style="font-family:Arial,Helvetica,sans-serif;color:#303a43;line-height:1.5">
<h2 style="font-family:Georgia,serif;color:#172638;font-weight:normal">Nuova richiesta dal sito</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="color:#7a6449;font-size:13px;vertical-align:top">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`,
    )
    .join("")}</table>
<p style="color:#7a6449;font-size:13px;margin-top:20px">Messaggio</p>
<p style="white-space:pre-wrap">${esc(payload.messaggio.trim())}</p>
<hr style="border:none;border-top:1px solid #e3ddd3;margin:24px 0"/>
<p style="font-size:12px;color:#585f66">Richiesta inviata dal modulo contatti del sito Studio Rosini. Presa visione dell'informativa privacy: sì.</p>
</body></html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Studio Rosini <sito@studiorosini.it>",
      to: [process.env.CONTACT_TO_EMAIL || "f.rosini@studiorosini.it"],
      reply_to: payload.email.trim(),
      subject: `Richiesta dal sito – ${servizio} – ${sede}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contatti] Invio email non riuscito", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { ok: false, message: "Non è stato possibile inviare la richiesta. Riprova più tardi o contatta lo studio." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
