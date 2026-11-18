import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { ArrowRight, CheckIcon, MailIcon, PhoneIcon, ServiceIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { getService, services } from "@/content/services";
import { locations, studio, telHref } from "@/content/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/servizi/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(s)} />

      <section className="border-b border-line-warm">
        <div className="container-site pb-16 pt-10 lg:pb-24 lg:pt-14">
          <Breadcrumbs
            items={[
              { name: "Servizi", path: "/servizi" },
              { name: s.title, path: `/servizi/${s.slug}` },
            ]}
          />
          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">Servizi · {s.number}</p>
              <h1 className="h1 mt-6">{s.title}</h1>
              <p className="lead mt-7 max-w-3xl">{s.intro}</p>
            </div>
            <div className="hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
              <span className="grid size-28 place-items-center rounded-full border border-line-warm text-navy">
                <ServiceIcon name={s.icon} width={44} height={44} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid gap-16 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-8">
            <h2 className="h3">Il servizio</h2>
            <div className="prose-studio mt-6 max-w-2xl leading-relaxed">
              {s.body.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>

            {s.notice ? (
              <p className="mt-10 max-w-2xl border-l-2 border-bronze bg-ivory px-6 py-5 text-[0.9375rem] leading-relaxed">
                <strong className="font-semibold text-navy">Nota sui limiti professionali. </strong>
                {s.notice}
              </p>
            ) : null}

            <h2 className="h3 mt-16">Ambiti di intervento</h2>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {s.scope.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line-warm pb-4 leading-snug">
                  <CheckIcon className="mt-0.5 shrink-0 text-bronze-ink" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="h3 mt-16">A chi si rivolge</h2>
            <ul className="mt-6 grid gap-3">
              {s.audience.map((item) => (
                <li key={item} className="flex gap-4 leading-snug">
                  <span aria-hidden="true" className="mt-[0.65rem] h-px w-5 shrink-0 bg-bronze" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="h3 mt-16">Domande frequenti</h2>
            <div className="mt-6">
              <Faq items={s.faq} />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" aria-label="Contatti e altri servizi">
            <div className="lg:sticky lg:top-28">
              <div className="on-dark bg-navy p-8 text-ivory/75 sm:p-9">
                <p className="eyebrow">Richiedi una consulenza</p>
                <p className="mt-5 font-serif text-[1.625rem] leading-snug text-ivory">
                  Raccontaci la tua esigenza: lo studio ti ricontatterà per un primo confronto.
                </p>
                <Link href={`/contatti?servizio=${s.slug}`} className="btn btn-light mt-8 w-full">
                  Scrivi allo studio
                  <ArrowRight className="btn-arrow" />
                </Link>
                <ul className="mt-8 grid gap-3 border-t border-ivory/15 pt-6 text-[0.9375rem]">
                  {locations
                    .filter((l) => l.phone.value)
                    .map((l) => (
                      <li key={l.slug}>
                        <a href={telHref(l.phone.value!)} className="flex items-center justify-between gap-4 hover:text-ivory">
                          <span>{l.city}</span>
                          <span className="inline-flex items-center gap-2 font-semibold text-ivory">
                            <PhoneIcon className="text-bronze" />
                            {l.phone.value}
                          </span>
                        </a>
                      </li>
                    ))}
                  <li>
                    <a href={`mailto:${studio.email}`} className="flex items-center gap-2 font-semibold text-ivory">
                      <MailIcon className="text-bronze" />
                      {studio.email}
                    </a>
                  </li>
                </ul>
              </div>

              <nav aria-label="Altri servizi" className="mt-10">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bronze-ink">Altri servizi</p>
                <ul className="mt-4 border-t border-line-warm">
                  {others.map((o) => (
                    <li key={o.slug} className="border-b border-line-warm">
                      <Link
                        href={`/servizi/${o.slug}`}
                        className="group flex items-center justify-between gap-4 py-3.5 text-[0.9375rem] text-navy"
                      >
                        <span>
                          <span className="mr-3 font-serif italic text-bronze-ink">{o.number}</span>
                          {o.title}
                        </span>
                        <ArrowRight className="shrink-0 text-bronze transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
