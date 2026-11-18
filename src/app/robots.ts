import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { IS_LIVE } from "@/lib/review";

export default function robots(): MetadataRoute.Robots {
  if (!IS_LIVE) {
    // Anteprima: nessuna indicizzazione finché i contenuti non sono confermati.
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
