import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  const muted = tone === "dark" ? "text-muted" : "text-ivory/70";
  const current = tone === "dark" ? "text-navy" : "text-ivory";
  return (
    <>
      <nav aria-label="Percorso di navigazione" className="text-[0.8125rem]">
        <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${muted}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={`${current} font-medium`}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="transition-colors hover:text-navy">
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className="text-bronze">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
