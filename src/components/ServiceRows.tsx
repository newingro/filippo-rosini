import Link from "next/link";
import { ArrowRight, ServiceIcon } from "@/components/Icons";
import { services } from "@/content/services";

/** Elenco editoriale dei sette servizi, con separatori sottili. */
export function ServiceRows({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-t border-line-warm">
      {services.map((s, i) => (
        <li key={s.slug} className="border-b border-line-warm" data-reveal style={{ "--reveal-delay": `${(i % 4) * 60}ms` } as React.CSSProperties}>
          <Link
            href={`/servizi/${s.slug}`}
            className="group relative isolate grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-3 py-8 transition-colors duration-500 sm:gap-x-8 md:grid-cols-[4.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)_auto] md:items-center md:py-10"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -inset-x-4 -z-10 origin-left scale-x-[0.98] bg-white opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 sm:-inset-x-6"
            />
            <span className="flex flex-col items-start gap-3 pt-1 md:pt-0">
              <span className="font-serif text-[1.125rem] italic text-bronze-ink">{s.number}</span>
              <ServiceIcon name={s.icon} className="text-navy/80" />
            </span>
            <H className="font-serif text-[1.65rem] leading-tight text-navy sm:text-[1.875rem]">{s.title}</H>
            <span className="col-span-3 col-start-1 text-[0.96875rem] leading-relaxed text-anthracite md:col-span-1 md:col-start-3 md:row-start-1">
              {s.short}
            </span>
            <span className="row-start-1 col-start-3 grid size-11 place-items-center rounded-full border border-line-warm text-navy transition-all duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-ivory md:col-start-4">
              <ArrowRight />
              <span className="sr-only">Approfondisci {s.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
