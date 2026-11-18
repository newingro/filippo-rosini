import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, ArrowUpRight, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { ToConfirm } from "@/components/ToConfirm";
import { directionsHref, getLocation, locations, studio, telHref } from "@/content/site";
import { services } from "@/content/services";
import { locationPageJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return pageMetadata({ title: l.seoTitle, description: l.seoDescription, path: `/sedi/${l.slug}` });
}

export default async function SedePage({ params }: Props) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const others = locations.filter((o) => o.slug !== l.slug);
  const preposition = l.slug === "osmannoro" ? "all'" : "a ";

  return (
    <>
      <JsonLd data={locationPageJsonLd(l)} />

      <section className="border-b border-line-warm">
        <div className="container-site pb-16 pt-10 lg:pb-24 lg:pt-14">
          <Breadcrumbs
            items={[
              { name: "Sedi", path: "/sedi" },
              { name: l.city, path: `/sedi/${l.slug}` },
            ]}
          />
          <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow">Sede di {l.city}</p>
              <h1 className="h1 mt-6">
                Studio Rosini {preposition}
                {l.city}
              </h1>
              <p className="lead mt-7 max-w-2xl">{l.intro}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-line-warm bg-white p-8 sm:p-10">
                <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bronze-ink">
                  Recapiti della sede
                </h2>
                <dl className="mt-6 grid gap-6">
                  <div className="flex gap-4">
                    <PinIcon className="mt-1 shrink-0 text-bronze-ink" />
                    <div>
                      <dt className="sr-only">Indirizzo</dt>
                      <dd>
                        <address className="not-italic leading-relaxed text-navy">
                          {l.addressConfirmed ? (
                            <>
                              {l.street.value}
                              <br />
                              {l.postalCode.value} {l.locality} ({l.province})
                            </>
                          ) : (
                            <>
                              Zona Osmannoro, {l.locality} ({l.province})
                              <ToConfirm note={l.street.note}>
                                <span className="mt-1 block text-muted">{l.street.value}</span>
                              </ToConfirm>
                            </>
                          )}
                        </address>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <PhoneIcon className="mt-1 shrink-0 text-bronze-ink" />
                    <div>
                      <dt className="sr-only">Telefono</dt>
                      <dd>
                        {l.phone.value ? (
                          <a href={telHref(l.phone.value)} className="font-semibold text-navy hover:text-bronze-ink">
                            {l.phone.value}
                          </a>
                        ) : (
                          <span className="text-muted">
                            Telefono in aggiornamento
                            <ToConfirm note={l.phone.note}>{null}</ToConfirm>
                          </span>
                        )}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MailIcon className="mt-1 shrink-0 text-bronze-ink" />
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href={`mailto:${studio.email}`} className="font-semibold text-navy hover:text-bronze-ink">
                          {studio.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="border-t border-line-warm pt-6 text-[0.9375rem]">
                    <dt className="font-semibold text-navy">Orari di ricevimento</dt>
                    <dd className="mt-1 text-muted">
                      Su appuntamento.
                      <ToConfirm note={l.hours.note}>{null}</ToConfirm>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-col gap-3">
                  <Link href={`/contatti?sede=${l.slug}`} className="btn btn-primary w-full">
                    Contatta la sede
                    <ArrowRight className="btn-arrow" />
                  </Link>
                  {l.addressConfirmed ? (
                    <a href={directionsHref(l)} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                      Indicazioni stradali
                      <ArrowUpRight />
                      <span className="sr-only">(si apre in una nuova scheda)</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="territorio-title" className="bg-white">
        <div className="container-site grid gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              Il territorio
            </p>
            <h2 id="territorio-title" className="h2 mt-6" data-reveal>
              Vicini alle imprese {l.slug === "osmannoro" ? "dell'area fiorentina" : `di ${l.city}`}.
            </h2>
          </div>
          <div className="prose-studio max-w-2xl text-[1.0625rem] leading-relaxed lg:col-span-6 lg:col-start-7" data-reveal>
            {l.local.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="servizi-sede-title">
        <div className="container-site py-24 lg:py-32">
          <p className="eyebrow" data-reveal>
            Servizi
          </p>
          <h2 id="servizi-sede-title" className="h2 mt-6 max-w-3xl" data-reveal>
            Le aree di consulenza dello studio, anche {preposition}
            {l.city}.
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden border border-line-warm bg-line-warm sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="flex">
                <Link
                  href={`/servizi/${s.slug}`}
                  className="group flex w-full items-center justify-between gap-4 bg-ivory p-6 transition-colors duration-500 hover:bg-white"
                >
                  <span>
                    <span className="block font-serif italic text-bronze-ink">{s.number}</span>
                    <span className="mt-1 block font-serif text-[1.375rem] leading-tight text-navy">{s.title}</span>
                  </span>
                  <ArrowRight className="shrink-0 text-bronze transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-20 border-t border-line-warm pt-10">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bronze-ink">Le altre sedi</p>
            <ul className="mt-5 flex flex-col gap-4 sm:flex-row sm:gap-12">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/sedi/${o.slug}`} className="link-arrow font-serif !text-[1.75rem] !font-normal">
                    <span className="link-underline">{o.city}</span>
                    <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
