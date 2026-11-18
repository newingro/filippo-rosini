import type { MetadataRoute } from "next";
import { getArticles } from "@/content/articles";
import { SITE_URL, locations } from "@/content/site";
import { services } from "@/content/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPages: { path: string; priority: number; freq: "monthly" | "yearly" | "weekly" }[] = [
    { path: "", priority: 1, freq: "monthly" },
    { path: "/filippo-rosini", priority: 0.9, freq: "yearly" },
    { path: "/servizi", priority: 0.9, freq: "monthly" },
    { path: "/sedi", priority: 0.8, freq: "yearly" },
    { path: "/contatti", priority: 0.8, freq: "yearly" },
    { path: "/approfondimenti", priority: 0.5, freq: "weekly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/cookie-policy", priority: 0.2, freq: "yearly" },
  ];
  const articles = await getArticles();

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/servizi/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...locations.map((l) => ({
      url: `${SITE_URL}/sedi/${l.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/approfondimenti/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
