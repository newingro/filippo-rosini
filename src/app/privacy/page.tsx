import { LegalPage } from "@/components/LegalPage";
import { locations, studio } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali degli utenti del sito di Studio Rosini (art. 13 Regolamento UE 2016/679).",
  path: "/privacy",
});

export default function PrivacyPage() {
  const sede = locations[0];
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="novembre 2026"
      lead="Informativa sul trattamento dei dati personali resa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) agli utenti che consultano il sito e utilizzano il modulo di contatto."
    >
      <h2>1. Titolare del trattamento</h2>
      <p>
        Titolare del trattamento è {studio.name} – {studio.professionalWithTitle}, con sede in {sede.street.value},{" "}
        {sede.postalCode.value} {sede.locality} ({sede.province}). Per qualsiasi richiesta relativa al trattamento dei
        dati personali è possibile scrivere a <a href={`mailto:${studio.email}`}>{studio.email}</a>.
      </p>

      <h2>2. Dati trattati</h2>
      <ul>
        <li>
          <strong>Dati di navigazione:</strong> i sistemi informatici che rendono disponibile il sito acquisiscono, nel
          normale funzionamento, alcuni dati tecnici (ad esempio indirizzo IP, data e ora della richiesta, pagina
          visitata, tipo di browser), utilizzati per garantire il corretto funzionamento e la sicurezza del sito.
        </li>
        <li>
          <strong>Dati forniti volontariamente:</strong> nome e cognome, azienda (facoltativo), indirizzo email, numero di
          telefono, sede preferita, servizio di interesse e contenuto del messaggio inseriti nel modulo di contatto,
          nonché i dati contenuti nelle email inviate agli indirizzi indicati sul sito.
        </li>
      </ul>
      <p>
        Il modulo di contatto non è destinato alla raccolta di dati fiscali, documenti o categorie particolari di dati:
        si invita l&apos;utente a non inserirli.
      </p>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>
          Rispondere alle richieste di informazioni e di appuntamento: esecuzione di misure precontrattuali adottate su
          richiesta dell&apos;interessato (art. 6, par. 1, lett. b GDPR).
        </li>
        <li>
          Garantire la sicurezza del sito e prevenire abusi: legittimo interesse del titolare (art. 6, par. 1, lett. f
          GDPR).
        </li>
        <li>Adempiere a eventuali obblighi di legge (art. 6, par. 1, lett. c GDPR).</li>
      </ul>

      <h2>4. Natura del conferimento</h2>
      <p>
        Il conferimento dei dati contrassegnati come obbligatori nel modulo è necessario per dare seguito alla
        richiesta; il mancato conferimento non consente di ricontattare l&apos;utente.
      </p>

      <h2>5. Modalità e tempi di conservazione</h2>
      <p>
        I dati sono trattati con strumenti elettronici e misure adeguate a garantirne la riservatezza. I dati relativi
        alle richieste di contatto sono conservati per il tempo necessario a gestire la richiesta e, se non segue un
        incarico professionale, per un periodo non superiore a 24 mesi. I dati di navigazione sono conservati per il
        tempo strettamente necessario alle finalità di sicurezza.
      </p>

      <h2>6. Destinatari</h2>
      <p>
        I dati possono essere trattati da collaboratori dello studio autorizzati e da fornitori di servizi tecnici che
        agiscono come responsabili del trattamento, in particolare il fornitore di hosting del sito (Vercel Inc.) e il
        servizio di invio delle email generate dal modulo di contatto (Resend). I dati non sono diffusi.
      </p>

      <h2>7. Trasferimento dei dati fuori dall&apos;Unione europea</h2>
      <p>
        Alcuni fornitori di servizi tecnici possono trattare dati al di fuori dello Spazio economico europeo. In tali
        casi il trasferimento avviene sulla base di garanzie adeguate, quali le decisioni di adeguatezza della
        Commissione europea (incluso l&apos;EU-U.S. Data Privacy Framework) o le clausole contrattuali standard.
      </p>

      <h2>8. Diritti dell&apos;interessato</h2>
      <p>
        L&apos;interessato può esercitare in qualsiasi momento i diritti previsti dagli articoli 15-22 del GDPR: accesso,
        rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione, scrivendo a{" "}
        <a href={`mailto:${studio.email}`}>{studio.email}</a>. È inoltre possibile proporre reclamo al Garante per la
        protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).
      </p>

      <h2>9. Modifiche</h2>
      <p>
        La presente informativa può essere aggiornata, anche in relazione a modifiche normative o tecniche del sito.
        Si invita a consultarla periodicamente.
      </p>
    </LegalPage>
  );
}
