import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { getArticle, getArticles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return { robots: { index: false } };
  return pageMetadata({ title: a.title, description: a.excerpt, path: `/approfondimenti/${a.slug}` });
}

const dateFmt = new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) notFound();

  return (
    <>
      <article>
        <header className="border-b border-line-warm">
          <div className="container-site pb-16 pt-10 lg:pb-20 lg:pt-14">
            <Breadcrumbs
              items={[
                { name: "Approfondimenti", path: "/approfondimenti" },
                { name: a.title, path: `/approfondimenti/${a.slug}` },
              ]}
            />
            <div className="mt-14 max-w-3xl">
              <p className="eyebrow">{a.category}</p>
              <h1 className="h1 mt-6">{a.title}</h1>
              <p className="mt-6 text-[0.9375rem] text-muted">
                {a.author} · <time dateTime={a.publishedAt}>{dateFmt.format(new Date(a.publishedAt))}</time>
              </p>
            </div>
          </div>
        </header>
        <div className="container-site py-16 lg:py-24">
          <div className="prose-studio max-w-2xl text-[1.0625rem] leading-relaxed">
            {a.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
