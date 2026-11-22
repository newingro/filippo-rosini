import { MailIcon } from "@/components/Icons";
import { locations, studio, telHref } from "@/content/site";

/** Barra superiore (desktop) con i recapiti delle sedi. */
export function TopBar() {
  return (
    <div className="hidden bg-navy-deep text-[0.8125rem] text-ivory/70 lg:block">
      <div className="container-site flex h-10 items-center justify-between gap-8">
        <p className="tracking-[0.02em]">
          Consulenza del lavoro, fiscale e societaria <span className="mx-2 text-bronze">·</span> Dal {studio.since}
        </p>
        <ul className="flex items-center gap-7">
          {locations
            .filter((l) => l.phone.value)
            .map((l) => (
              <li key={l.slug}>
                <a href={telHref(l.phone.value!)} className="transition-colors hover:text-ivory">
                  {l.city} <span className="ml-1 font-semibold text-ivory">{l.phone.value}</span>
                </a>
              </li>
            ))}
          <li className="border-l border-ivory/15 pl-7">
            <a href={`mailto:${studio.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-ivory">
              <MailIcon width={15} height={15} className="text-bronze" />
              {studio.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
