import Link from "next/link";
import { ArrowRight, ServiceIcon } from "@/components/Icons";
import { services } from "@/content/services";

/** Elenco editoriale dei sette servizi. */
export function ServiceRows({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-t border-line-warm">
      {services.map((s, i) => (
        <li
          key={s.slug}
          className="border-b border-line-warm"
          data-reveal
          style={{ "--reveal-delay": `${(i % 4) * 60}ms` } as React.CSSProperties}
        >
          <Link
            href={`/servizi/${s.slug}`}
            className="group relative isolate grid grid-cols-[2.75rem_1fr_auto] items-start gap-x-5 py-8 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-8 sm:py-9"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -inset-x-4 -z-10 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-inset-x-6"
            />
            <span className="flex flex-col items-start gap-3 pt-1">
              <span className="font-serif text-[1.125rem] italic leading-none text-bronze-ink">{s.number}</span>
              <ServiceIcon name={s.icon} className="text-navy/75" />
            </span>
            <span>
              <H className="font-serif text-[1.625rem] leading-tight text-navy transition-colors duration-300 sm:text-[1.875rem]">
                {s.title}
              </H>
              <span className="mt-2.5 block max-w-2xl text-[0.96875rem] leading-relaxed text-anthracite">{s.short}</span>
            </span>
            <span className="grid size-11 place-items-center rounded-full border border-line-warm text-navy transition-all duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-ivory">
              <ArrowRight />
              <span className="sr-only">Approfondisci {s.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
