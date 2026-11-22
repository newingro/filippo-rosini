import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HeroPicture } from "@/components/HeroPicture";
import { ArrowRight } from "@/components/Icons";
import { LocationCard } from "@/components/LocationCard";
import { OfficeGallery } from "@/components/OfficeGallery";
import { ServiceRows } from "@/components/ServiceRows";
import { ReviewNote } from "@/components/ToConfirm";
import { locations, studio } from "@/content/site";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Studio Rosini | Dott. Filippo Rosini – Consulente del lavoro a Pistoia, Prato e Firenze Osmannoro",
  description:
    "Dal 1992 il Dott. Filippo Rosini affianca imprese, professionisti e privati con consulenza del lavoro, fiscale, societaria e aziendale. Tre sedi in Toscana: Pistoia, Prato e Osmannoro (FI).",
  path: "/",
  absoluteTitle: true,
});

const credentials = [
  { title: `Dal ${studio.since}`, text: "Oltre trent'anni di attività professionale" },
  { title: "Consulente del Lavoro", text: "Abilitazione conseguita nel 2007" },
  { title: "Tre sedi", text: "Pistoia, Prato e Osmannoro (FI)" },
  { title: "Sette aree", text: "di consulenza integrata" },
];

const method = [
  {
    n: "01",
    title: "Primo colloquio",
    text: "Un incontro per conoscere l'attività, le esigenze e le priorità del cliente, senza impegno e senza documenti da preparare.",
  },
  {
    n: "02",
    title: "Analisi",
    text: "L'esame della situazione amministrativa, fiscale e del lavoro, per individuare adempimenti, rischi e opportunità.",
  },
  {
    n: "03",
    title: "Proposta",
    text: "L'indicazione chiara delle attività necessarie, delle modalità di assistenza e dei tempi di lavoro.",
  },
  {
    n: "04",
    title: "Assistenza continuativa",
    text: "Un riferimento costante per scadenze, adempimenti e decisioni, con un rapporto diretto nel tempo.",
  },
];

const principles = [
  { n: "I", title: "Ascolto", text: "Comprendere le esigenze reali di ogni cliente, prima di proporre qualsiasi soluzione." },
  { n: "II", title: "Competenza", text: "Affrontare le questioni professionali con metodo, preparazione e aggiornamento costante." },
  { n: "III", title: "Continuità", text: "Costruire rapporti professionali capaci di accompagnare le imprese nel tempo." },
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ivory" aria-labelledby="hero-title">
        <div className="relative aspect-[5/6] w-full overflow-hidden bg-ivory-deep sm:aspect-[16/11] lg:absolute lg:inset-0 lg:aspect-auto">
          <HeroPicture
            desktop={photos.vetrata}
            mobile={photos.vetrataMobile}
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%] lg:object-[24%_40%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(247,245,241,0)_26%,rgba(247,245,241,0.78)_50%,rgba(247,245,241,0.95)_70%,rgba(247,245,241,0.97)_100%)] lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent lg:hidden"
          />
        </div>

        <div className="container-site relative lg:grid lg:min-h-[min(50rem,calc(100svh-8.25rem))] lg:grid-cols-12 lg:items-center">
          <div className="pb-20 pt-4 lg:col-span-7 lg:col-start-6 lg:pb-32 lg:pt-20 xl:col-span-6 xl:col-start-7">
            <p className="eyebrow" data-reveal>
              Studio Rosini · Dal {studio.since}
            </p>
            <h1 id="hero-title" className="display mt-7" data-reveal style={delay(80)}>
              Esperienza e competenza, <span className="italic">al fianco della tua impresa.</span>
            </h1>
            <p className="lead mt-8 max-w-[36rem]" data-reveal style={delay(160)}>
              Il {studio.professionalWithTitle} affianca imprese, professionisti e privati con servizi di consulenza del
              lavoro, fiscale, societaria e aziendale. Un rapporto diretto, costruito sull&apos;ascolto e sulla
              conoscenza delle esigenze di ogni cliente.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal style={delay(240)}>
              <Link href="/contatti" className="btn btn-primary">
                Richiedi una consulenza
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link href="/filippo-rosini" className="btn btn-outline bg-ivory/60">
                Conosci Filippo Rosini
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENZIALI + IL PROFESSIONISTA */}
      <section aria-labelledby="professionista-title" className="relative bg-ivory">
        <div className="container-site relative z-10 lg:-mt-16">
          <dl
            className="grid grid-cols-2 border border-line-warm bg-white shadow-[0_30px_60px_-45px_rgba(16,28,42,0.6)] lg:grid-cols-4"
            data-reveal
          >
            {credentials.map((c, i) => (
              <div
                key={c.title}
                className={`px-5 py-7 sm:px-8 sm:py-9 lg:px-7 ${i % 2 === 1 ? "border-l border-line-warm" : ""} ${
                  i > 1 ? "border-t border-line-warm lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l" : ""}`}
              >
                <dt className="font-serif text-[1.375rem] leading-tight text-navy sm:text-[1.625rem] lg:text-[1.5rem] xl:text-[1.625rem]">{c.title}</dt>
                <dd className="mt-1.5 text-[0.875rem] leading-snug text-muted">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="container-site grid items-center gap-16 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-6">
            <p className="eyebrow" data-reveal>
              Il professionista
            </p>
            <h2 id="professionista-title" className="h2 mt-6" data-reveal>
              Un punto di riferimento, prima ancora che uno studio.
            </h2>
            <div className="prose-studio mt-8 max-w-xl text-[1.0625rem] leading-relaxed" data-reveal>
              <p>
                Filippo Rosini ha iniziato la propria attività professionale nel 1992 nel settore della consulenza
                tributaria. Nel 2007 ha conseguito l&apos;abilitazione come Consulente del Lavoro, sviluppando un
                percorso professionale fondato sull&apos;aggiornamento continuo e sull&apos;assistenza alle imprese.
              </p>
              <p>
                Oggi guida Studio Rosini, una realtà che unisce competenze professionali differenti per offrire
                un&apos;assistenza coordinata alle esigenze amministrative, fiscali, societarie e del lavoro.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-line-warm pt-8" data-reveal>
              <div>
                <p className="font-serif text-[2rem] italic leading-none text-navy">Filippo Rosini</p>
                <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-bronze-ink">
                  {studio.shortQualification}
                </p>
              </div>
              <Link href="/filippo-rosini" className="link-arrow">
                <span className="link-underline">Scopri il percorso professionale</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <figure className="relative mx-auto max-w-[30rem] pb-6 pl-6 lg:mr-0">
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-10 top-10 border border-bronze/70" />
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep shadow-[0_40px_80px_-50px_rgba(16,28,42,0.75)]">
                <Image
                  src={photos.ritratto.src}
                  alt={photos.ritratto.alt}
                  fill
                  quality={85}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 30rem, 90vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section aria-labelledby="servizi-title" className="bg-white">
        <div className="container-site grid gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-36">
              <p className="eyebrow" data-reveal>
                Aree di consulenza
              </p>
              <h2 id="servizi-title" className="h2 mt-6" data-reveal>
                Competenze integrate per ogni fase della tua attività.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed" data-reveal>
                Dall&apos;avvio di un&apos;impresa alla gestione quotidiana, fino alle decisioni strategiche, Studio
                Rosini offre servizi professionali e assistenza qualificata.
              </p>
              <Link href="/servizi" className="btn btn-outline mt-9" data-reveal>
                Tutti i servizi
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ServiceRows />
          </div>
        </div>
      </section>

      {/* METODO */}
      <section aria-labelledby="metodo-title">
        <div className="container-site py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow" data-reveal>
                Il metodo
              </p>
              <h2 id="metodo-title" className="h2 mt-6" data-reveal>
                Un percorso chiaro, dal primo incontro all&apos;assistenza continuativa.
              </h2>
            </div>
            <p className="text-[1.0625rem] leading-relaxed lg:col-span-4 lg:col-start-9" data-reveal>
              Ogni rapporto professionale inizia con l&apos;ascolto e prosegue con un lavoro ordinato, spiegato in modo
              comprensibile.
            </p>
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden border border-line-warm bg-line-warm sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {method.map((m, i) => (
              <li key={m.n} className="bg-ivory p-8 sm:p-10" data-reveal style={delay(i * 90)}>
                <span className="font-serif text-[3rem] leading-none text-bronze-ink">{m.n}</span>
                <span aria-hidden="true" className="mt-7 block h-px w-10 bg-bronze" />
                <h3 className="mt-7 font-serif text-[1.75rem] leading-tight">{m.title}</h3>
                <p className="mt-3 leading-relaxed">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section aria-labelledby="filosofia-title" className="on-dark relative overflow-hidden bg-navy text-ivory/75">
        <div className="container-site py-24 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5" data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
                <Image
                  src={photos.bracciaIncrociate.src}
                  alt={photos.bracciaIncrociate.alt}
                  fill
                  quality={85}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover object-[45%_8%]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow" data-reveal>
                La nostra filosofia
              </p>
              <h2 id="filosofia-title" className="h2 mt-6 !text-ivory" data-reveal>
                Ogni decisione importante merita la giusta consulenza.
              </h2>
              <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed" data-reveal>
                La missione di Studio Rosini è assistere il cliente lungo il suo percorso professionale e
                imprenditoriale. Dalle prime valutazioni che precedono la costituzione di un&apos;attività, alla
                gestione ordinaria e alle fasi di sviluppo, lo studio pone al centro un&apos;assistenza continuativa e
                coordinata.
              </p>
              <ul className="mt-12 grid gap-8 border-t border-ivory/15 pt-10 sm:grid-cols-3 sm:gap-6">
                {principles.map((p, i) => (
                  <li key={p.title} data-reveal style={delay(i * 90)}>
                    <span className="font-serif text-[1.125rem] italic text-bronze">{p.n}</span>
                    <h3 className="mt-2 font-serif text-[1.75rem] leading-tight !text-ivory">{p.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GLI AMBIENTI */}
      <section aria-labelledby="ambienti-title" className="bg-white">
        <div className="container-site py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow" data-reveal>
                Lo studio
              </p>
              <h2 id="ambienti-title" className="h2 mt-6" data-reveal>
                Ambienti riservati, pensati per il confronto.
                <ReviewNote
                  label="Immagini da verificare"
                  note="Dettagli ricavati dalle nuove fotografie: verificare che corrispondano agli ambienti reali dello studio prima della pubblicazione."
                />
              </h2>
            </div>
            <p className="text-[1.0625rem] leading-relaxed lg:col-span-4 lg:col-start-9" data-reveal>
              Ogni incontro si svolge in spazi tranquilli e luminosi, dove dedicare il giusto tempo all&apos;ascolto e
              all&apos;analisi delle questioni di ogni cliente.
            </p>
          </div>
          <div className="mt-14 lg:mt-20" data-reveal>
            <OfficeGallery />
          </div>
        </div>
      </section>

      {/* SEDI */}
      <section aria-labelledby="sedi-title">
        <div className="container-site py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow" data-reveal>
                Presenza sul territorio
              </p>
              <h2 id="sedi-title" className="h2 mt-6" data-reveal>
                Tre sedi. Un unico riferimento professionale.
              </h2>
            </div>
            <p className="text-[1.0625rem] leading-relaxed lg:col-span-4 lg:col-start-9" data-reveal>
              Studio Rosini opera attraverso tre sedi in Toscana, per garantire vicinanza e accessibilità a imprese,
              professionisti e privati.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {locations.map((l, i) => (
              <LocationCard key={l.slug} location={l} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
