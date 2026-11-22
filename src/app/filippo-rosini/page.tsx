import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { ReviewNote, ToConfirm } from "@/components/ToConfirm";
import { bioQuote, studio, timeline } from "@/content/site";
import { photos } from "@/content/photos";
import { IS_LIVE } from "@/lib/review";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Filippo Rosini – Consulente del Lavoro",
  description:
    "Il percorso professionale del Dott. Filippo Rosini: dal 1992 nella consulenza tributaria, dal 2007 Consulente del Lavoro. Oggi guida Studio Rosini a Pistoia, Prato e Osmannoro.",
  path: "/filippo-rosini",
});

const approach = [
  {
    title: "Un interlocutore diretto",
    text: "Il rapporto con lo studio passa attraverso il confronto personale: chi si rivolge a Studio Rosini sa con chi sta parlando e a chi affidare le proprie questioni.",
  },
  {
    title: "Chiarezza",
    text: "Adempimenti, scadenze e conseguenze delle diverse scelte vengono spiegati in modo comprensibile, perché ogni decisione sia presa in modo consapevole.",
  },
  {
    title: "Riservatezza",
    text: "Le informazioni del cliente sono trattate con la discrezione e la cura che ogni rapporto professionale richiede.",
  },
];

export default function FilippoRosiniPage() {
  const showAttribution = !IS_LIVE || bioQuote.approved;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="container-site relative pb-14 pt-10 lg:min-h-[46rem] lg:pb-28 lg:pt-14">
          <Breadcrumbs items={[{ name: "Filippo Rosini", path: "/filippo-rosini" }]} />
          <div className="mt-12 max-w-2xl lg:mt-24 lg:w-[54%] lg:max-w-none lg:pr-12">
            <p className="eyebrow" data-reveal>
              Il professionista
            </p>
            <h1 className="display mt-7" data-reveal>
              Filippo Rosini.
              <span className="mt-3 block text-[0.6em] italic leading-[1.1] text-navy/90">
                Un percorso professionale dedicato alla consulenza.
              </span>
            </h1>
            <p className="lead mt-8 max-w-xl" data-reveal>
              {studio.shortQualification}, dal {studio.since} accanto a imprese, professionisti e privati.
              Un&apos;esperienza costruita nel tempo, attraverso l&apos;aggiornamento continuo e il confronto diretto
              con chi fa impresa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal>
              <Link href="/contatti" className="btn btn-primary">
                Parla con lo Studio Rosini
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link href="/servizi" className="btn btn-outline">
                I servizi dello studio
              </Link>
            </div>
            <dl className="mt-14 grid max-w-xl grid-cols-3 border-t border-line-warm pt-7" data-reveal>
              {[
                { t: "1992", d: "Inizio dell'attività" },
                { t: "2007", d: "Consulente del Lavoro" },
                { t: "3 sedi", d: "In Toscana" },
              ].map((f) => (
                <div key={f.t}>
                  <dt className="font-serif text-[1.75rem] leading-none text-navy">{f.t}</dt>
                  <dd className="mt-2 text-[0.8125rem] leading-snug text-muted">{f.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative mx-5 mb-16 aspect-[4/5] overflow-hidden bg-ivory-deep sm:mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:aspect-auto lg:w-[42%]">
          <Image
            src={photos.inPiedi.src}
            alt={photos.inPiedi.alt}
            fill
            preload
            quality={85}
            placeholder="blur"
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
        </div>
      </section>

      {/* PERCORSO */}
      <section aria-labelledby="percorso-title" className="bg-white">
        <div className="container-site grid gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow" data-reveal>
                Il percorso
              </p>
              <h2 id="percorso-title" className="h2 mt-6" data-reveal>
                Oltre trent&apos;anni di attività professionale.
              </h2>
            </div>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden="true" className="absolute bottom-3 left-[0.3125rem] top-3 w-px bg-line-warm sm:left-[7.3rem]" />
            {timeline
              .filter((t) => t.confirmed || !IS_LIVE)
              .map((t) => (
                <li
                  key={t.year}
                  className="relative grid gap-2 pb-14 pl-9 last:pb-0 sm:grid-cols-[6rem_1fr] sm:gap-10 sm:pl-0"
                  data-reveal
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.65rem] size-[0.6875rem] rounded-full border border-bronze bg-white sm:left-[6.95rem]"
                  />
                  <span className="font-serif text-[2.25rem] leading-none text-navy sm:text-right">{t.year}</span>
                  <div className="sm:pl-6">
                    <h3 className="font-serif text-[1.625rem] leading-tight">
                      {t.title}
                      {!t.confirmed ? <ReviewNote label="Verifica documentale" note={t.note} /> : null}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed">{t.text}</p>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </section>

      {/* RAPPORTO DIRETTO */}
      <section aria-labelledby="rapporto-title">
        <div className="container-site py-24 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5" data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                <Image
                  src={photos.ritratto.src}
                  alt={photos.ritratto.alt}
                  fill
                  quality={85}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow" data-reveal>
                L&apos;approccio
              </p>
              <h2 id="rapporto-title" className="h2 mt-6" data-reveal>
                Il valore di un rapporto diretto.
              </h2>
              <figure className="mt-10 border-l border-bronze pl-7" data-reveal>
                <blockquote className="font-serif text-[1.75rem] italic leading-snug text-navy sm:text-[2rem]">
                  {showAttribution ? <>&ldquo;{bioQuote.text}&rdquo;</> : bioQuote.text}
                </blockquote>
                {showAttribution ? (
                  <figcaption className="mt-5 text-[0.875rem] font-semibold uppercase tracking-[0.14em] text-bronze-ink">
                    Filippo Rosini
                    {!bioQuote.approved ? (
                      <ReviewNote
                        label="Proposta editoriale – da approvare"
                        note="Frase proposta: non è una citazione autentica finché non viene approvata da Filippo Rosini."
                      />
                    ) : null}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          </div>

          <ul className="mt-20 grid gap-10 border-t border-line-warm pt-12 md:grid-cols-3 lg:mt-24">
            {approach.map((a, i) => (
              <li key={a.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <span aria-hidden="true" className="block h-px w-10 bg-bronze" />
                <h3 className="mt-6 font-serif text-[1.75rem] leading-tight">{a.title}</h3>
                <p className="mt-3 leading-relaxed">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LO STUDIO OGGI */}
      <section aria-labelledby="oggi-title" className="on-dark bg-navy text-ivory/75">
        <div className="container-site grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-6">
            <p className="eyebrow" data-reveal>
              Studio Rosini oggi
            </p>
            <h2 id="oggi-title" className="h2 mt-6 !text-ivory" data-reveal>
              Competenze differenti, un unico riferimento.
            </h2>
            <div className="prose-studio mt-8 max-w-xl text-[1.0625rem] leading-relaxed" data-reveal>
              <p>
                Intorno alla figura di Filippo Rosini, lo studio riunisce competenze nelle aree del lavoro, fiscale,
                societaria e aziendale, avvalendosi della collaborazione di professionisti qualificati per gli ambiti
                che richiedono abilitazioni specifiche.
              </p>
              <p>
                Il cliente trova così un interlocutore capace di coordinare questioni diverse, con la continuità che
                nasce da un rapporto costruito nel tempo.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal>
              <Link href="/servizi" className="btn btn-light">
                Scopri i servizi
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link href="/sedi" className="btn btn-outline-light">
                Le nostre sedi
              </Link>
            </div>
            <p className="mt-8 text-[0.875rem]">
              <ToConfirm note={studio.professionalRegister.note}>
                <>Iscritto all&apos;{studio.professionalRegister.value}.</>
              </ToConfirm>
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep">
              <Image
                src={photos.vetrata.src}
                alt={photos.vetrata.alt}
                fill
                quality={85}
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[22%_40%]"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Parla con lo Studio Rosini." cta="Richiedi un appuntamento" />
    </>
  );
}
