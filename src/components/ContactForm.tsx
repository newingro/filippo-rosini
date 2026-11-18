"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { MESSAGE_MAX, SEDI_OPTIONS, validateContact, type ContactErrors, type ContactPayload } from "@/lib/contact";

type ServiceOption = { slug: string; title: string };
type Status = "idle" | "sending" | "success" | "error";

const FIELD_ORDER: (keyof ContactPayload)[] = ["nome", "azienda", "email", "telefono", "sede", "servizio", "messaggio", "privacy"];

export function ContactForm({
  services,
  fallbackEmail,
  fallbackPhone,
}: {
  services: ServiceOption[];
  fallbackEmail: string;
  fallbackPhone: string;
}) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const startedAt = useRef<number>(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [values, setValues] = useState<ContactPayload>({
    nome: "",
    azienda: "",
    email: "",
    telefono: "",
    sede: "",
    servizio: "",
    messaggio: "",
    privacy: false,
    website: "",
    startedAt: 0,
  });

  // Precompila sede e servizio dai parametri dell'URL (?sede=prato&servizio=...)
  useEffect(() => {
    startedAt.current = Date.now();
    const q = new URLSearchParams(window.location.search);
    const sede = q.get("sede");
    const servizio = q.get("servizio");
    setValues((v) => ({
      ...v,
      sede: sede && SEDI_OPTIONS.some((s) => s.value === sede) ? sede : v.sede,
      servizio: servizio && services.some((s) => s.slug === servizio) ? servizio : v.servizio,
    }));
  }, [services]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const slugs = services.map((s) => s.slug);

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      const next = validateContact({ ...values, [key]: value }, slugs);
      setErrors((e) => ({ ...e, [key]: next[key] }));
    }
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setServerMessage(null);
    const payload = { ...values, startedAt: startedAt.current };
    const found = validateContact(payload, slugs);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: ContactErrors; message?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerMessage(
        data.message ??
          "Non è stato possibile inviare la richiesta. Riprova tra qualche minuto oppure contatta direttamente lo studio.",
      );
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
    } catch {
      setServerMessage("Connessione non disponibile. Verifica la rete e riprova, oppure contatta direttamente lo studio.");
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="border border-line-warm bg-white p-8 outline-none sm:p-12"
      >
        <span className="grid size-12 place-items-center rounded-full bg-navy text-ivory">
          <CheckIcon width={22} height={22} />
        </span>
        <h2 className="h3 mt-6">Richiesta inviata. Grazie.</h2>
        <p className="mt-4 max-w-lg leading-relaxed">
          Abbiamo ricevuto il tuo messaggio. Lo studio ti ricontatterà ai recapiti che hai indicato per un primo
          confronto.
        </p>
        <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-muted">
          Se la tua richiesta è urgente puoi chiamare lo studio al{" "}
          <a href={`tel:+39${fallbackPhone.replace(/\s+/g, "")}`} className="font-semibold text-navy">
            {fallbackPhone}
          </a>
          .
        </p>
      </div>
    );
  }

  const errorList = FIELD_ORDER.filter((k) => errors[k]);
  const describedBy = (name: keyof ContactPayload, hint?: boolean) =>
    [hint ? id(`${name}-hint`) : null, errors[name] ? id(`${name}-error`) : null].filter(Boolean).join(" ") || undefined;

  return (
    <form noValidate onSubmit={onSubmit} className="border border-line-warm bg-white p-6 sm:p-10" aria-describedby={id("intro")}>
      <p id={id("intro")} className="text-[0.875rem] text-muted">
        I campi contrassegnati con <span aria-hidden="true">*</span>
        <span className="sr-only">asterisco</span> sono obbligatori.
      </p>

      <div ref={summaryRef} tabIndex={-1} aria-live="assertive" className="outline-none">
        {status === "error" && (errorList.length > 0 || serverMessage) ? (
          <div className="mt-6 border-l-2 border-error bg-[#fbf1f1] px-5 py-4 text-[0.9375rem] text-[#5c1a1a]">
            {serverMessage ? <p>{serverMessage}</p> : null}
            {errorList.length > 0 ? (
              <>
                <p className="font-semibold">
                  {errorList.length === 1 ? "Controlla il campo evidenziato:" : `Controlla i ${errorList.length} campi evidenziati:`}
                </p>
                <ul className="mt-2 list-disc pl-5">
                  {errorList.map((k) => (
                    <li key={k}>
                      <a href={`#${id(k)}`} className="underline underline-offset-2">
                        {errors[k]}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {serverMessage ? (
              <p className="mt-2">
                Email:{" "}
                <a className="font-semibold underline" href={`mailto:${fallbackEmail}`}>
                  {fallbackEmail}
                </a>{" "}
                · Tel.{" "}
                <a className="font-semibold underline" href={`tel:+39${fallbackPhone.replace(/\s+/g, "")}`}>
                  {fallbackPhone}
                </a>
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id={id("nome")} label="Nome e cognome" required error={errors.nome} errorId={id("nome-error")}>
          <input
            id={id("nome")}
            name="nome"
            type="text"
            autoComplete="name"
            className="field"
            value={values.nome}
            onChange={(e) => update("nome", e.target.value)}
            aria-invalid={!!errors.nome}
            aria-describedby={describedBy("nome")}
            required
          />
        </Field>

        <Field id={id("azienda")} label="Azienda" optional error={errors.azienda} errorId={id("azienda-error")}>
          <input
            id={id("azienda")}
            name="azienda"
            type="text"
            autoComplete="organization"
            className="field"
            value={values.azienda}
            onChange={(e) => update("azienda", e.target.value)}
            aria-invalid={!!errors.azienda}
            aria-describedby={describedBy("azienda")}
          />
        </Field>

        <Field id={id("email")} label="Email" required error={errors.email} errorId={id("email-error")}>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="field"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            required
          />
        </Field>

        <Field id={id("telefono")} label="Numero di telefono" required error={errors.telefono} errorId={id("telefono-error")}>
          <input
            id={id("telefono")}
            name="telefono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            value={values.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            aria-invalid={!!errors.telefono}
            aria-describedby={describedBy("telefono")}
            required
          />
        </Field>

        <Field id={id("sede")} label="Sede preferita" required error={errors.sede} errorId={id("sede-error")}>
          <select
            id={id("sede")}
            name="sede"
            className="field"
            value={values.sede}
            onChange={(e) => update("sede", e.target.value)}
            aria-invalid={!!errors.sede}
            aria-describedby={describedBy("sede")}
            required
          >
            <option value="" disabled>
              Seleziona una sede
            </option>
            {SEDI_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={id("servizio")} label="Servizio di interesse" required error={errors.servizio} errorId={id("servizio-error")}>
          <select
            id={id("servizio")}
            name="servizio"
            className="field"
            value={values.servizio}
            onChange={(e) => update("servizio", e.target.value)}
            aria-invalid={!!errors.servizio}
            aria-describedby={describedBy("servizio")}
            required
          >
            <option value="" disabled>
              Seleziona un servizio
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="altro">Altro / da definire</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field id={id("messaggio")} label="Messaggio" required error={errors.messaggio} errorId={id("messaggio-error")}>
            <p id={id("messaggio-hint")} className="-mt-1 mb-2.5 text-[0.8125rem] leading-snug text-muted">
              Descrivi brevemente la tua esigenza. Non inserire dati fiscali, documenti o informazioni riservate: verranno
              richiesti dallo studio solo se necessari.
            </p>
            <textarea
              id={id("messaggio")}
              name="messaggio"
              rows={6}
              maxLength={MESSAGE_MAX}
              className="field"
              value={values.messaggio}
              onChange={(e) => update("messaggio", e.target.value)}
              aria-invalid={!!errors.messaggio}
              aria-describedby={describedBy("messaggio", true)}
              required
            />
          </Field>
        </div>
      </div>

      {/* Honeypot antispam: invisibile agli utenti */}
      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Lascia vuoto questo campo</label>
        <input
          id={id("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="mt-8">
        <div className="flex gap-3.5">
          <input
            id={id("privacy")}
            name="privacy"
            type="checkbox"
            className="mt-1 size-5 shrink-0 cursor-pointer accent-navy"
            checked={values.privacy}
            onChange={(e) => update("privacy", e.target.checked)}
            aria-invalid={!!errors.privacy}
            aria-describedby={describedBy("privacy")}
            required
          />
          <label htmlFor={id("privacy")} className="cursor-pointer text-[0.9375rem] leading-snug">
            Dichiaro di aver letto l&apos;
            <Link href="/privacy" className="font-semibold text-navy underline underline-offset-2" target="_blank">
              informativa sul trattamento dei dati personali
            </Link>{" "}
            e chiedo di essere ricontattato in merito alla mia richiesta. <span aria-hidden="true">*</span>
          </label>
        </div>
        {errors.privacy ? (
          <p id={id("privacy-error")} className="mt-2 pl-8 text-[0.875rem] font-medium text-error">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-line-warm pt-8 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary disabled:opacity-70" disabled={status === "sending"}>
          {status === "sending" ? "Invio in corso…" : "Invia richiesta"}
          {status === "sending" ? null : <ArrowRight className="btn-arrow" />}
        </button>
        <p className="text-[0.8125rem] leading-snug text-muted sm:max-w-[16rem] sm:text-right">
          I dati sono utilizzati esclusivamente per rispondere alla tua richiesta.
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "sending" ? "Invio della richiesta in corso" : ""}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  errorId,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  errorId: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {optional ? <span className="font-normal text-muted"> (facoltativo)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-2 text-[0.875rem] font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
