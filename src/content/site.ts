/**
 * Dati anagrafici e di contatto di Studio Rosini.
 *
 * I campi con `confirmed: false` provengono da fonti pubbliche non ancora
 * validate dallo studio: in anteprima vengono mostrati con l'etichetta
 * "Da confermare"; a sito pubblicato (NEXT_PUBLIC_SITE_LIVE=true) vengono
 * nascosti finché non si imposta `confirmed: true`.
 */

export type Confirmable<T> = { value: T; confirmed: boolean; note?: string };

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://studiorosini.it").replace(/\/$/, "");

export const studio = {
  name: "Studio Rosini",
  professional: "Filippo Rosini",
  /** "Dott." richiede la verifica del titolo accademico: vedi README, checklist. */
  professionalWithTitle: "Dott. Filippo Rosini",
  qualification: "Consulente del Lavoro e consulente d'impresa",
  shortQualification: "Consulente del Lavoro",
  since: 1992,
  claim: "Consulenza e competenza al servizio di imprese e professionisti.",
  positioning:
    "Una consulenza professionale fondata sull'esperienza, sulla competenza e su un rapporto diretto con il cliente.",
  email: "f.rosini@studiorosini.it",
  vatId: {
    value: "01174550473",
    confirmed: false,
    note: "Partita IVA riportata dal sito precedente: verificare intestazione e dati obbligatori del footer.",
  } as Confirmable<string>,
  professionalRegister: {
    value: "Ordine dei Consulenti del Lavoro della Provincia di Pistoia",
    confirmed: false,
    note: "Iscrizione dichiarata dal sito precedente: inserire numero e data di iscrizione.",
  } as Confirmable<string>,
} as const;

export type Location = {
  slug: "pistoia" | "prato" | "osmannoro";
  city: string;
  label: string;
  province: string;
  street: Confirmable<string>;
  postalCode: Confirmable<string>;
  locality: string;
  region: string;
  phone: Confirmable<string | null>;
  /** Coordinate geografiche: da inserire solo dopo verifica (es. da Google Business Profile). */
  geo: Confirmable<{ lat: number; lng: number } | null>;
  hours: Confirmable<string | null>;
  /** Il pulsante "Indicazioni stradali" compare solo con indirizzo verificato. */
  addressConfirmed: boolean;
  intro: string;
  local: string[];
  seoTitle: string;
  seoDescription: string;
};

export const locations: Location[] = [
  {
    slug: "pistoia",
    city: "Pistoia",
    label: "Pistoia",
    province: "PT",
    street: { value: "Via Tomasi di Lampedusa, 149", confirmed: true },
    postalCode: { value: "51100", confirmed: true },
    locality: "Pistoia",
    region: "Toscana",
    phone: { value: "0573 531194", confirmed: true },
    geo: { value: null, confirmed: false, note: "Coordinate da rilevare dalla scheda Google Business Profile." },
    hours: { value: null, confirmed: false, note: "Orari di apertura da comunicare." },
    addressConfirmed: true,
    intro:
      "La sede di Pistoia è il punto di riferimento storico dell'attività di Filippo Rosini, avviata nel 1992. Qui lo studio accoglie imprese, professionisti e privati per un confronto diretto sulle questioni del lavoro, fiscali e societarie.",
    local: [
      "Il tessuto economico pistoiese è fatto in larga parte di piccole e medie imprese, attività artigiane, commerciali e aziende del settore florovivaistico: realtà che chiedono un interlocutore capace di seguire con continuità tanto la gestione del personale quanto gli adempimenti amministrativi e fiscali.",
      "Presso la sede di Pistoia è possibile fissare un appuntamento per un primo colloquio, per l'avvio di una nuova attività o per la revisione della gestione amministrativa in essere, con la possibilità di coordinare il lavoro anche con le altre sedi dello studio.",
    ],
    seoTitle: "Consulente del lavoro a Pistoia",
    seoDescription:
      "Studio Rosini a Pistoia, Via Tomasi di Lampedusa 149: consulenza del lavoro, paghe e contributi, consulenza fiscale e societaria per imprese e professionisti.",
  },
  {
    slug: "prato",
    city: "Prato",
    label: "Prato",
    province: "PO",
    street: { value: "Via del Molinuzzo, 77/A", confirmed: true },
    postalCode: { value: "59100", confirmed: true },
    locality: "Prato",
    region: "Toscana",
    phone: { value: "0574 206682", confirmed: true },
    geo: { value: null, confirmed: false, note: "Coordinate da rilevare dalla scheda Google Business Profile." },
    hours: { value: null, confirmed: false, note: "Orari di apertura da comunicare." },
    addressConfirmed: true,
    intro:
      "La sede di Prato porta l'esperienza di Studio Rosini nel cuore di uno dei distretti produttivi più importanti della Toscana, con un'assistenza costruita sulle esigenze concrete delle imprese del territorio.",
    local: [
      "L'economia pratese è storicamente legata al distretto tessile e alle filiere che vi ruotano intorno, accanto a un numero crescente di attività commerciali, di servizi e di nuove imprese. Per molte di queste realtà la corretta gestione dei rapporti di lavoro e degli adempimenti è un elemento quotidiano e decisivo.",
      "Presso la sede di Prato lo studio segue la gestione del personale, la consulenza fiscale e societaria e l'avvio di nuove attività, mantenendo un rapporto diretto con il cliente e un coordinamento costante con le altre sedi.",
    ],
    seoTitle: "Consulente del lavoro a Prato",
    seoDescription:
      "Studio Rosini a Prato, Via del Molinuzzo 77/A: consulenza del lavoro, gestione paghe, consulenza fiscale e aziendale per le imprese del territorio pratese.",
  },
  {
    slug: "osmannoro",
    city: "Osmannoro",
    label: "Osmannoro",
    province: "FI",
    street: { value: "Via Enrico Fermi, 46", confirmed: true },
    postalCode: { value: "50019", confirmed: true },
    locality: "Sesto Fiorentino",
    region: "Toscana",
    phone: { value: "335 775 4282", confirmed: true },
    geo: { value: null, confirmed: false, note: "Coordinate da rilevare dalla scheda Google Business Profile." },
    hours: { value: null, confirmed: false, note: "Orari di apertura da comunicare." },
    addressConfirmed: true,
    intro:
      "La sede dell'Osmannoro, nell'area produttiva tra Firenze e Sesto Fiorentino, consente allo studio di essere vicino alle imprese dell'area fiorentina e della piana.",
    local: [
      "L'Osmannoro è una delle principali zone industriali e commerciali dell'area metropolitana fiorentina, con aziende manifatturiere, logistiche, commerciali e di servizi. Una presenza in quest'area permette allo studio di offrire un riferimento facilmente raggiungibile a chi opera tra Firenze, Sesto Fiorentino, Campi Bisenzio e la piana.",
      "Presso la sede dell'Osmannoro è possibile richiedere un appuntamento per le diverse aree di consulenza dello studio, con il medesimo approccio diretto e coordinato che caratterizza le sedi di Pistoia e Prato.",
    ],
    seoTitle: "Consulente del lavoro a Firenze Osmannoro",
    seoDescription:
      "Studio Rosini a Firenze Osmannoro, Via Enrico Fermi 46, Sesto Fiorentino (FI): consulenza del lavoro, fiscale e societaria per imprese e professionisti dell'area fiorentina.",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

export const primaryPhone = locations[0].phone.value as string;

export const telHref = (phone: string) => `tel:+39${phone.replace(/\s+/g, "")}`;

export const directionsHref = (l: Location) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${l.street.value}, ${l.postalCode.value} ${l.locality} ${l.province}`,
  )}`;

export const mainNav = [
  { href: "/filippo-rosini", label: "Filippo Rosini" },
  { href: "/servizi", label: "Servizi" },
  { href: "/sedi", label: "Sedi" },
  { href: "/contatti", label: "Contatti" },
] as const;

/**
 * Frase in prima persona proposta per la pagina biografica.
 * Finché `approved` è false viene presentata come proposta editoriale (anteprima)
 * e, a sito pubblicato, senza attribuzione diretta a Filippo Rosini.
 */
export const bioQuote = {
  text: "Credo che una consulenza efficace nasca prima di tutto dalla conoscenza del cliente, della sua attività e degli obiettivi che desidera raggiungere.",
  approved: false,
};

export const timeline: { year: string; title: string; text: string; confirmed: boolean; note?: string }[] = [
  {
    year: "1992",
    title: "L'inizio dell'attività",
    text: "Filippo Rosini avvia il proprio percorso professionale come tributarista, occupandosi di consulenza fiscale e degli adempimenti di imprese e privati.",
    confirmed: true,
  },
  {
    year: "2007",
    title: "La consulenza del lavoro",
    text: "Supera l'esame di abilitazione e si iscrive all'Ordine dei Consulenti del Lavoro della provincia di Pistoia, estendendo l'attività alla gestione dei rapporti di lavoro e del personale.",
    confirmed: true,
  },
  {
    year: "2018",
    title: "Aggiornamento e formazione",
    text: "Prosegue il percorso di formazione con studi in Diritto ed Economia presso l'Università Popolare di Milano.",
    confirmed: false,
    note: "Dettaglio riportato dal sito precedente: pubblicare solo dopo verifica documentale di denominazione e titolo.",
  },
  {
    year: "Oggi",
    title: "Studio Rosini",
    text: "Un'attività professionale sviluppata intorno all'assistenza alle imprese e al coordinamento di competenze in differenti aree della consulenza, con sedi a Pistoia, Prato e Osmannoro.",
    confirmed: true,
  },
];
