import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, ServiceIcon } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/content/services";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Servizi di consulenza del lavoro, fiscale e societaria",
  description:
    "Consulenza del lavoro, fiscale, societaria e tributaria, consulenza legale integrata, pratiche di finanziamento, avvio d'impresa, contabilità e bilanci. I servizi di Studio Rosini.",
  path: "/servizi",
});

export default function ServiziPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Servizi", path: "/servizi" }]}
        eyebrow="Servizi"
        title="Competenze integrate per ogni fase della tua attività."
        lead={
          <p>
            Dall&apos;avvio di un&apos;impresa alla gestione quotidiana, fino alle decisioni strategiche, Studio Rosini
            offre servizi professionali e assistenza qualificata, coordinando le diverse aree in un unico rapporto di
            consulenza.
          </p>
        }
      />

      <section aria-label="Lo studio al lavoro" className="container-site -mt-px">
        <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-ivory-deep sm:aspect-[21/9] lg:mt-16" data-reveal>
          <Image
            src={photos.scrivania.src}
            alt={photos.scrivania.alt}
            fill
            quality={85}
            placeholder="blur"
            sizes="(min-width: 1280px) 1184px, 100vw"
            className="object-cover object-[50%_14%]"
          />
        </div>
      </section>

      <section aria-labelledby="elenco-servizi" className="py-24 lg:py-32">
        <div className="container-site">
          <h2 id="elenco-servizi" className="sr-only">
            Elenco dei servizi
          </h2>
          <ol className="grid gap-px overflow-hidden border border-line-warm bg-line-warm md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="flex" data-reveal>
                <Link
                  href={`/servizi/${s.slug}`}
                  className="group flex w-full flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-white sm:p-11"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[1.25rem] italic text-bronze-ink">{s.number}</span>
                    <ServiceIcon name={s.icon} className="text-navy/80" width={32} height={32} />
                  </div>
                  <h3 className="mt-8 font-serif text-[2rem] leading-tight">{s.title}</h3>
                  <p className="mt-4 leading-relaxed">{s.short}</p>
                  <ul className="mt-6 grid gap-2 text-[0.9375rem] text-muted">
                    {s.scope.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7rem] h-px w-3 shrink-0 bg-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="link-arrow mt-auto pt-9">
                    <span className="link-underline">Approfondisci</span>
                    <ArrowRight />
                    <span className="sr-only">: {s.title}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex bg-navy" data-reveal>
              <div className="on-dark flex w-full flex-col justify-between p-8 text-ivory/75 sm:p-11">
                <div>
                  <p className="eyebrow">Un unico riferimento</p>
                  <p className="mt-6 font-serif text-[1.875rem] leading-snug text-ivory">
                    Non sai da quale area partire? Raccontaci la tua situazione: sarà lo studio a indicarti il percorso
                    più adatto.
                  </p>
                </div>
                <Link href="/contatti" className="btn btn-light mt-10 self-start">
                  Richiedi una consulenza
                  <ArrowRight className="btn-arrow" />
                </Link>
              </div>
            </li>
          </ol>

          <p className="mt-10 max-w-3xl text-[0.875rem] leading-relaxed text-muted">
            Le prestazioni riservate agli avvocati sono svolte esclusivamente da professionisti abilitati. Le soluzioni di
            credito, finanziamento e leasing sono erogate da soggetti autorizzati. Nessun servizio comporta la promessa di
            risultati economici o fiscali predeterminati.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
