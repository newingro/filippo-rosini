import Link from "next/link";
import { ArrowRight, ArrowUpRight, PhoneIcon, PinIcon } from "@/components/Icons";
import { ToConfirm } from "@/components/ToConfirm";
import { directionsHref, telHref, type Location } from "@/content/site";

export function LocationCard({ location: l, index }: { location: Location; index: number }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
      className="group flex h-full flex-col border border-line-warm bg-white p-7 transition-shadow duration-500 hover:shadow-[0_24px_50px_-34px_rgba(23,38,56,0.45)] sm:p-9"
    >
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bronze-ink">
        Sede {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 font-serif text-[2.25rem] leading-none text-navy">
        <Link href={`/sedi/${l.slug}`} className="transition-colors hover:text-bronze-ink">
          {l.city}
        </Link>
      </h3>
      <div className="mt-6 h-px w-10 bg-bronze" aria-hidden="true" />

      <address className="mt-6 flex gap-3 not-italic leading-relaxed">
        <PinIcon className="mt-1 shrink-0 text-bronze-ink" />
        <span>
          {l.addressConfirmed ? (
            <>
              {l.street.value}
              <br />
              {l.postalCode.value} {l.locality} ({l.province})
            </>
          ) : (
            <>
              Zona Osmannoro
              <br />
              {l.locality} ({l.province})
              <ToConfirm note={l.street.note}>
                <span className="mt-1 block text-[0.9375rem] text-muted">{l.street.value}</span>
              </ToConfirm>
            </>
          )}
        </span>
      </address>

      <p className="mt-4 flex gap-3">
        <PhoneIcon className="mt-1 shrink-0 text-bronze-ink" />
        {l.phone.value ? (
          <a href={telHref(l.phone.value)} className="font-semibold text-navy transition-colors hover:text-bronze-ink">
            {l.phone.value}
          </a>
        ) : (
          <span className="text-muted">
            Telefono in aggiornamento
            <ToConfirm note={l.phone.note}>{null}</ToConfirm>
          </span>
        )}
      </p>

      <div className="mt-auto flex flex-wrap gap-3 pt-9">
        {l.addressConfirmed ? (
          <a
            href={directionsHref(l)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Indicazioni stradali
            <ArrowUpRight />
            <span className="sr-only">(si apre in una nuova scheda)</span>
          </a>
        ) : null}
        <Link href={`/contatti?sede=${l.slug}`} className="btn btn-primary btn-sm">
          Contatta la sede
          <ArrowRight className="btn-arrow" />
        </Link>
      </div>
    </article>
  );
}
