/**
 * Approfondimenti dello studio.
 *
 * L'elenco è intenzionalmente vuoto: gli articoli vanno pubblicati solo dopo
 * la revisione dello studio. Per collegare un CMS headless (Sanity, Contentful,
 * Storyblok…) è sufficiente sostituire `getArticles()` con una chiamata alle
 * API del CMS che restituisca oggetti di tipo `Article`.
 */

export const articleCategories = [
  "Novità fiscali",
  "Consulenza del lavoro",
  "Normativa e adempimenti",
  "Imprese e società",
  "Approfondimenti professionali",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  /** Data ISO, es. "2026-11-18" */
  publishedAt: string;
  author: string;
  /** Paragrafi del testo, già revisionati dallo studio. */
  body: string[];
};

const articles: Article[] = [];

export async function getArticles(): Promise<Article[]> {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  return articles.find((a) => a.slug === slug);
}
