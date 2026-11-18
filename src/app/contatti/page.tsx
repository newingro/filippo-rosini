import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { ToConfirm } from "@/components/ToConfirm";
import { locations, primaryPhone, studio, telHref } from "@/content/site";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contatti",
  description:
    "Contatta Studio Rosini per informazioni o per fissare un appuntamento nelle sedi di Pistoia, Prato e Osmannoro. Email f.rosini@studiorosini.it.",
  path: "/contatti",
});

export default function ContattiPage() {
  return (
    <>
      <section>
        <div className="container-site pb-24 pt-10 lg:pb-32 lg:pt-14">
          <Breadcrumbs items={[{ name: "Contatti", path: "/contatti" }]} />
          <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow">Contatti</p>
              <h1 className="h1 mt-6">Parliamo delle tue esigenze.</h1>
              <p className="lead mt-7 max-w-2xl">
                Contatta Studio Rosini per richiedere informazioni o fissare un primo appuntamento presso una delle
                nostre sedi.
              </p>
              <div className="mt-12">
                <ContactForm
                  services={services.map((s) => ({ slug: s.slug, title: s.title }))}
                  fallbackEmail={studio.email}
                  fallbackPhone={primaryPhone}
                />
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9" aria-label="Recapiti dello studio">
              <div className="lg:sticky lg:top-28">
                <div className="on-dark bg-navy p-8 text-ivory/75 sm:p-9">
                  <p className="eyebrow">Email</p>
                  <a
                    href={`mailto:${studio.email}`}
                    className="mt-4 flex items-center gap-3 break-all font-serif text-[1.5rem] leading-snug text-ivory"
                  >
                    <MailIcon className="shrink-0 text-bronze" />
                    {studio.email}
                  </a>
                  <p className="mt-4 text-[0.875rem] leading-relaxed">
                    Per un primo contatto non è necessario inviare documenti: lo studio li richiederà, se utili, con
                    modalità adeguate alla loro riservatezza.
                  </p>
                </div>

                <ul className="mt-6 grid gap-px border border-line-warm bg-line-warm">
                  {locations.map((l) => (
                    <li key={l.slug} className="bg-white p-7">
                      <h2 className="font-serif text-[1.625rem] leading-none">{l.city}</h2>
                      <p className="mt-4 flex gap-3 text-[0.9375rem] leading-relaxed">
                        <PinIcon className="mt-1 shrink-0 text-bronze-ink" />
                        <span>
                          {l.addressConfirmed ? (
                            <>
                              {l.street.value}, {l.postalCode.value} {l.locality} ({l.province})
                            </>
                          ) : (
                            <>
                              Zona Osmannoro, {l.locality} ({l.province})
                              <ToConfirm note={l.street.note}>{null}</ToConfirm>
                            </>
                          )}
                        </span>
                      </p>
                      {l.phone.value ? (
                        <a
                          href={telHref(l.phone.value)}
                          className="mt-2 flex items-center gap-3 text-[0.9375rem] font-semibold text-navy hover:text-bronze-ink"
                        >
                          <PhoneIcon className="shrink-0 text-bronze-ink" />
                          {l.phone.value}
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.875rem] leading-relaxed text-muted">
                  Gli incontri presso le sedi si svolgono su appuntamento.{" "}
                  <a href={telHref(primaryPhone)} className="font-semibold text-navy underline underline-offset-2">
                    Chiama ora
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
