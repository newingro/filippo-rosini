import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { studio } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "Informazioni sull'utilizzo di cookie e strumenti di tracciamento sul sito di Studio Rosini.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookie-policy"
      updated="novembre 2026"
      lead="Informazioni sull'utilizzo di cookie e di altri strumenti di tracciamento sul sito di Studio Rosini, ai sensi della normativa vigente e delle Linee guida del Garante per la protezione dei dati personali."
    >
      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell&apos;utente, dove vengono
        memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Strumenti analoghi (ad esempio il
        local storage del browser) svolgono funzioni simili.
      </p>

      <h2>2. Cookie utilizzati da questo sito</h2>
      <p>
        Nella configurazione attuale il sito <strong>non utilizza cookie di profilazione né cookie analitici di terze
        parti</strong>. Possono essere impiegati esclusivamente strumenti tecnici strettamente necessari al
        funzionamento e alla sicurezza del sito, per i quali la normativa non richiede il consenso preventivo
        dell&apos;utente. Per questo motivo non viene mostrato un banner di consenso.
      </p>
      <ul>
        <li>I caratteri tipografici sono serviti direttamente dal sito, senza collegamenti a server di terze parti.</li>
        <li>Il sito non incorpora mappe, video o pulsanti social di terze parti.</li>
        <li>
          Il pulsante &ldquo;Indicazioni stradali&rdquo; apre Google Maps in una nuova scheda: da quel momento si applica
          l&apos;informativa di Google.
        </li>
      </ul>

      <h2>3. Strumenti di statistica</h2>
      <p>
        Qualora in futuro vengano introdotti strumenti di statistica o altri servizi che richiedono il consenso,
        questa informativa sarà aggiornata e verrà attivato un banner che consentirà di esprimere scelte granulari,
        modificabili in qualsiasi momento.
      </p>

      <h2>4. Gestione dei cookie dal browser</h2>
      <p>
        L&apos;utente può in ogni momento cancellare o bloccare i cookie tramite le impostazioni del proprio browser.
        Il blocco dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
      </p>

      <h2>5. Contatti</h2>
      <p>
        Per informazioni è possibile scrivere a <a href={`mailto:${studio.email}`}>{studio.email}</a>. Per maggiori
        dettagli sul trattamento dei dati personali si veda la <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
