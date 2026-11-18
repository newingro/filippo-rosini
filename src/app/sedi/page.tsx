import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { LocationCard } from "@/components/LocationCard";
import { PageHeader } from "@/components/PageHeader";
import { locations } from "@/content/site";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Le nostre sedi: Pistoia, Prato e Osmannoro",
  description:
    "Studio Rosini opera attraverso tre sedi in Toscana: Pistoia, Prato e Osmannoro (Sesto Fiorentino). Indirizzi, telefoni e contatti delle sedi.",
  path: "/sedi",
});

export default function SediPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Sedi", path: "/sedi" }]}
        eyebrow="Presenza sul territorio"
        title="Tre sedi. Un unico riferimento professionale."
        lead={
          <p>
            Studio Rosini opera attraverso tre sedi in Toscana, per garantire vicinanza e accessibilità a imprese,
            professionisti e privati. In ciascuna sede il cliente trova lo stesso metodo di lavoro e un coordinamento
            costante con le altre.
          </p>
        }
      />

      <section aria-labelledby="elenco-sedi" className="py-20 lg:py-28">
        <div className="container-site">
          <h2 id="elenco-sedi" className="sr-only">
            Elenco delle sedi
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((l, i) => (
              <LocationCard key={l.slug} location={l} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="appuntamento-title" className="bg-white">
        <div className="container-site grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-5" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
              <Image
                src={photos.figuraInteraFrontale.src}
                alt={photos.figuraInteraFrontale.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow" data-reveal>
              Su appuntamento
            </p>
            <h2 id="appuntamento-title" className="h2 mt-6" data-reveal>
              Un confronto di persona, nella sede più comoda per te.
            </h2>
            <div className="prose-studio mt-8 max-w-xl" data-reveal>
              <p>
                Per dedicare a ogni cliente il tempo necessario, gli incontri presso le sedi si svolgono su
                appuntamento. Indica nel modulo di contatto la sede che preferisci: lo studio ti ricontatterà per
                concordare giorno e orario.
              </p>
              <p>
                Le tre sedi lavorano in modo coordinato: le pratiche avviate in una sede possono essere seguite anche
                dalle altre, senza perdere continuità.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
