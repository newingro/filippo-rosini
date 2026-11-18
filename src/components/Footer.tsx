import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ToConfirm } from "@/components/ToConfirm";
import { locations, studio, telHref } from "@/content/site";
import { services } from "@/content/services";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="on-dark bg-navy text-ivory/75">
      <div className="container-site pb-10 pt-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-7 max-w-xs font-serif text-[1.5rem] leading-snug text-ivory">{studio.claim}</p>
            <a
              href={`mailto:${studio.email}`}
              className="link-underline mt-7 inline-block text-[0.9375rem] font-medium text-ivory"
            >
              {studio.email}
            </a>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8 lg:gap-10">
            <FooterCol title="Studio">
              <FooterLink href="/filippo-rosini">Filippo Rosini</FooterLink>
              <FooterLink href="/servizi">Servizi</FooterLink>
              <FooterLink href="/sedi">Le nostre sedi</FooterLink>
              <FooterLink href="/approfondimenti">Approfondimenti</FooterLink>
              <FooterLink href="/contatti">Contatti</FooterLink>
            </FooterCol>

            <FooterCol title="Servizi">
              {services.map((s) => (
                <FooterLink key={s.slug} href={`/servizi/${s.slug}`}>
                  {s.title}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Sedi">
              {locations.map((l) => (
                <li key={l.slug} className="text-[0.875rem] leading-relaxed">
                  <Link href={`/sedi/${l.slug}`} className="font-semibold text-ivory transition-colors hover:text-bronze">
                    {l.city}
                  </Link>
                  <span className="mt-1 block">
                    {l.addressConfirmed ? (
                      <>
                        {l.street.value}
                        <br />
                        {l.postalCode.value} {l.locality} ({l.province})
                      </>
                    ) : (
                      <>
                        Zona Osmannoro, {l.locality} ({l.province})
                      </>
                    )}
                  </span>
                  {l.phone.value ? (
                    <a href={telHref(l.phone.value)} className="mt-1 inline-block text-ivory transition-colors hover:text-bronze">
                      Tel. {l.phone.value}
                    </a>
                  ) : null}
                </li>
              ))}
            </FooterCol>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-ivory/15 pt-8 text-[0.8125rem] lg:flex-row lg:items-center lg:justify-between">
          <p className="leading-relaxed">
            © {year} {studio.name} · {studio.professionalWithTitle}
            <ToConfirm note={studio.vatId.note}>
              <> · P.IVA {studio.vatId.value}</>
            </ToConfirm>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-ivory">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="transition-colors hover:text-ivory">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bronze">{title}</h2>
      <ul className="mt-6 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[0.9375rem] transition-colors hover:text-ivory">
        {children}
      </Link>
    </li>
  );
}
