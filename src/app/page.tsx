import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { LocationCard } from "@/components/LocationCard";
import { ServiceRows } from "@/components/ServiceRows";
import { locations, studio } from "@/content/site";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Studio Rosini | Dott. Filippo Rosini – Consulente del lavoro a Pistoia, Prato e Osmannoro",
  description:
    "Dal 1992 il Dott. Filippo Rosini affianca imprese, professionisti e privati con consulenza del lavoro, fiscale, societaria e aziendale. Tre sedi in Toscana: Pistoia, Prato e Osmannoro.",
  path: "/",
  absoluteTitle: true,
});

const highlights = [
  { title: "Dal 1992", text: "Un percorso professionale continuo, oltre trent'anni di attività" },
  { title: "3 sedi in Toscana", text: "Pistoia, Prato e Osmannoro" },
  { title: "Consulenza integrata", text: "Lavoro, fisco, società e impresa" },
];

const principles = [
  { n: "I", title: "Ascolto", text: "Comprendere le esigenze reali di ogni cliente, prima di proporre qualsiasi soluzione." },
  { n: "II", title: "Competenza", text: "Affrontare le questioni professionali con metodo, preparazione e aggiornamento costante." },
  { n: "III", title: "Continuità", text: "Costruire rapporti professionali capaci di accompagnare le imprese nel tempo." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[36%] bg-ivory-deep lg:block" />
        <div className="container-site relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16 lg:pb-28 lg:pt-20">
          <div className="lg:col-span-7 lg:row-start-1 lg:pr-10">
            <p className="eyebrow" data-reveal>
              Studio Rosini · Dal {studio.since}
            </p>
            <h1 className="display mt-7" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              Esperienza e competenza, <span className="italic">al fianco della tua impresa.</span>
            </h1>
            <p
              className="lead mt-8 max-w-[38rem]"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              Il {studio.professionalWithTitle} affianca imprese, professionisti e privati con servizi di consulenza del
              lavoro, fiscale, societaria e aziendale. Un rapporto diretto, costruito sull&apos;ascolto e sulla
              conoscenza delle esigenze di ogni cliente.
            </p>
            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <Link href="/contatti" className="btn btn-primary">
                Richiedi una consulenza
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link href="/filippo-rosini" className="btn btn-outline">
                Conosci Filippo Rosini
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <figure className="relative mx-auto w-full max-w-[29rem] pr-5 pt-5 sm:pr-7 sm:pt-7 lg:mr-0">
              <div aria-hidden="true" className="absolute bottom-16 left-12 right-0 top-0 bg-navy" />
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep shadow-[0_40px_70px_-45px_rgba(16,28,42,0.7)]">
                <Image
                  src={photos.hero.src}
                  alt={photos.hero.alt}
                  fill
                  priority
                  fetchPriority="high"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 29rem, (min-width: 640px) 27rem, 90vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
              <figcaption className="relative mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-serif text-[1.375rem] text-navy">{studio.professionalWithTitle}</span>
                <span className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-bronze-ink">
                  {studio.shortQualification}
                </span>
              </figcaption>
            </figure>
          </div>
          <dl className="grid gap-6 border-t border-line-warm pt-8 sm:grid-cols-3 sm:gap-8 lg:col-span-7 lg:row-start-2 lg:-mt-6 lg:mr-10">
            {highlights.map((h, i) => (
              <div key={h.title} data-reveal style={{ "--reveal-delay": `${300 + i * 80}ms` } as React.CSSProperties}>
                <dt className="font-serif text-[1.5rem] leading-tight text-navy">{h.title}</dt>
                <dd className="mt-1.5 text-[0.875rem] leading-snug text-muted">{h.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* IL PROFESSIONISTA */}
      <section aria-labelledby="professionista-title" className="bg-white">
        <div className="container-site grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-5" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
              <Image
                src={photos.scrivaniaFrontale.src}
                alt={photos.scrivaniaFrontale.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-[50%_40%]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow" data-reveal>
              Il professionista
            </p>
            <h2 id="professionista-title" className="h2 mt-6" data-reveal>
              Un punto di riferimento, prima ancora che uno studio.
            </h2>
            <div className="prose-studio mt-8 max-w-xl" data-reveal>
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

            <dl className="mt-10 grid max-w-xl gap-px overflow-hidden border border-line-warm bg-line-warm sm:grid-cols-2" data-reveal>
              <div className="bg-white p-6">
                <dt className="font-serif text-[2.25rem] leading-none text-navy">1992</dt>
                <dd className="mt-2 text-[0.9375rem] leading-snug text-muted">Avvio dell&apos;attività come tributarista</dd>
              </div>
              <div className="bg-white p-6">
                <dt className="font-serif text-[2.25rem] leading-none text-navy">2007</dt>
                <dd className="mt-2 text-[0.9375rem] leading-snug text-muted">Abilitazione come Consulente del Lavoro</dd>
              </div>
            </dl>

            <Link href="/filippo-rosini" className="link-arrow mt-10" data-reveal>
              <span className="link-underline">Scopri il percorso professionale</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section aria-labelledby="servizi-title">
        <div className="container-site py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow" data-reveal>
                Aree di consulenza
              </p>
              <h2 id="servizi-title" className="h2 mt-6" data-reveal>
                Competenze integrate per ogni fase della tua attività.
              </h2>
            </div>
            <div className="lg:col-span-5" data-reveal>
              <p className="text-[1.0625rem] leading-relaxed">
                Dall&apos;avvio di un&apos;impresa alla gestione quotidiana, fino alle decisioni strategiche, Studio
                Rosini offre servizi professionali e assistenza qualificata.
              </p>
            </div>
          </div>
          <div className="mt-14 lg:mt-20">
            <ServiceRows />
          </div>
          <div className="mt-12" data-reveal>
            <Link href="/servizi" className="link-arrow">
              <span className="link-underline">Tutti i servizi dello studio</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section aria-labelledby="filosofia-title" className="on-dark bg-navy text-ivory/75">
        <div className="container-site py-24 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5" data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
                <Image
                  src={photos.profiloBusto.src}
                  alt={photos.profiloBusto.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover object-[40%_30%] opacity-95"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
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
            </div>
          </div>

          <ul className="mt-20 grid gap-12 border-t border-ivory/15 pt-12 md:grid-cols-3 md:gap-10 lg:mt-24">
            {principles.map((p, i) => (
              <li key={p.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <span className="font-serif text-[1.25rem] italic text-bronze">{p.n}</span>
                <h3 className="mt-3 font-serif text-[2rem] leading-tight !text-ivory">{p.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ul>
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
            <p className="text-[1.0625rem] leading-relaxed lg:col-span-5" data-reveal>
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
