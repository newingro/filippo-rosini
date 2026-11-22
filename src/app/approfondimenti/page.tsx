import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { articleCategories, getArticles } from "@/content/articles";
import { offices } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Approfondimenti",
  description:
    "Approfondimenti di Studio Rosini su novità fiscali, consulenza del lavoro, normativa e adempimenti, imprese e società.",
  path: "/approfondimenti",
});

const dateFmt = new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" });

export default async function ApprofondimentiPage() {
  const articles = await getArticles();

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Approfondimenti", path: "/approfondimenti" }]}
        eyebrow="Approfondimenti"
        title="Aggiornamenti e riflessioni dello studio."
        lead={
          <p>
            Uno spazio dedicato alle novità fiscali, alla consulenza del lavoro e agli adempimenti che riguardano imprese
            e professionisti, con contenuti curati e revisionati da Studio Rosini.
          </p>
        }
      >
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Categorie">
          {articleCategories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-line-warm bg-white px-4 py-1.5 text-[0.8125rem] font-medium text-anthracite"
            >
              {c}
            </li>
          ))}
        </ul>
      </PageHeader>

      <section aria-label="Articoli" className="py-20 lg:py-28">
        <div className="container-site">
          {articles.length > 0 ? (
            <ul className="grid gap-px overflow-hidden border border-line-warm bg-line-warm md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <li key={a.slug} className="flex">
                  <Link href={`/approfondimenti/${a.slug}`} className="group flex w-full flex-col bg-ivory p-8 hover:bg-white">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-bronze-ink">{a.category}</p>
                    <h2 className="mt-4 font-serif text-[1.75rem] leading-tight">{a.title}</h2>
                    <p className="mt-3 leading-relaxed">{a.excerpt}</p>
                    <p className="mt-auto pt-8 text-[0.875rem] text-muted">
                      <time dateTime={a.publishedAt}>{dateFmt.format(new Date(a.publishedAt))}</time>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid items-center gap-12 border border-line-warm bg-white lg:grid-cols-12">
              <div className="p-8 sm:p-12 lg:col-span-7 lg:p-16">
                <p className="eyebrow">In preparazione</p>
                <h2 className="h2 mt-6">I primi approfondimenti sono in fase di redazione.</h2>
                <p className="mt-6 max-w-xl leading-relaxed">
                  Lo studio pubblicherà qui solo contenuti verificati e utili per la gestione della tua attività. Nel
                  frattempo, per qualsiasi dubbio su adempimenti, scadenze o novità normative puoi rivolgerti direttamente
                  allo studio.
                </p>
                <Link href="/contatti" className="btn btn-primary mt-10">
                  Contatta lo studio
                  <ArrowRight className="btn-arrow" />
                </Link>
              </div>
              <div className="relative hidden aspect-[4/5] h-full lg:col-span-5 lg:block">
                <Image
                  src={offices.vista.src}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="40vw"
                  className="object-cover object-[40%_50%]"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
