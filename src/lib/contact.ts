/** Validazione condivisa (client e server) del modulo contatti, senza dipendenze esterne. */

export const SEDI_OPTIONS = [
  { value: "pistoia", label: "Pistoia" },
  { value: "prato", label: "Prato" },
  { value: "osmannoro", label: "Osmannoro" },
  { value: "indifferente", label: "Nessuna preferenza" },
] as const;

export type ContactPayload = {
  nome: string;
  azienda: string;
  email: string;
  telefono: string;
  sede: string;
  servizio: string;
  messaggio: string;
  privacy: boolean;
  /** Honeypot: deve restare vuoto */
  website: string;
  /** Timestamp di apertura del modulo (ms) */
  startedAt: number;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s().\/-]{6,20}$/;

export const MESSAGE_MAX = 2000;

export function validateContact(p: ContactPayload, serviceSlugs: string[]): ContactErrors {
  const e: ContactErrors = {};
  const nome = p.nome.trim();
  if (nome.length < 2) e.nome = "Inserisci nome e cognome.";
  else if (nome.length > 100) e.nome = "Il nome non può superare i 100 caratteri.";

  if (p.azienda.trim().length > 120) e.azienda = "Il nome dell'azienda non può superare i 120 caratteri.";

  if (!p.email.trim()) e.email = "Inserisci il tuo indirizzo email.";
  else if (!EMAIL_RE.test(p.email.trim()) || p.email.length > 160) e.email = "Inserisci un indirizzo email valido, ad esempio nome@dominio.it.";

  if (!p.telefono.trim()) e.telefono = "Inserisci un numero di telefono.";
  else if (!PHONE_RE.test(p.telefono.trim())) e.telefono = "Inserisci un numero di telefono valido.";

  if (!SEDI_OPTIONS.some((s) => s.value === p.sede)) e.sede = "Seleziona la sede preferita.";

  if (!(serviceSlugs.includes(p.servizio) || p.servizio === "altro")) e.servizio = "Seleziona il servizio di interesse.";

  const msg = p.messaggio.trim();
  if (msg.length < 10) e.messaggio = "Descrivi brevemente la tua richiesta (almeno 10 caratteri).";
  else if (msg.length > MESSAGE_MAX) e.messaggio = `Il messaggio non può superare i ${MESSAGE_MAX} caratteri.`;

  if (!p.privacy) e.privacy = "Per inviare la richiesta è necessario prendere visione dell'informativa privacy.";

  return e;
}
