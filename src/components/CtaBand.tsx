import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MailIcon, PhoneIcon } from "@/components/Icons";
import { primaryPhone, studio, telHref } from "@/content/site";
import { photos } from "@/content/photos";

export function CtaBand({
  title = "Parliamo delle tue esigenze.",
  text = "Contatta Studio Rosini per richiedere informazioni o fissare un primo appuntamento presso una delle sedi di Pistoia, Prato e Osmannoro.",
  cta = "Richiedi una consulenza",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="overflow-hidden bg-ivory-deep">
      <div className="container-site grid items-stretch gap-0 py-0 lg:grid-cols-12">
        <div className="py-20 lg:col-span-6 lg:py-28 lg:pr-16" data-reveal>
          <p className="eyebrow">Primo contatto</p>
          <h2 id="cta-title" className="h2 mt-6">
            {title}
          </h2>
          <p className="lead mt-6 max-w-xl">{text}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/contatti" className="btn btn-primary">
              {cta}
              <ArrowRight className="btn-arrow" />
            </Link>
            <a href={telHref(primaryPhone)} className="btn btn-outline">
              <PhoneIcon />
              {primaryPhone}
            </a>
          </div>
          <a
            href={`mailto:${studio.email}`}
            className="mt-8 inline-flex items-center gap-2.5 text-[0.9375rem] text-anthracite transition-colors hover:text-navy"
          >
            <MailIcon className="text-bronze-ink" />
            <span className="link-underline">{studio.email}</span>
          </a>
        </div>
        <div className="relative -mx-5 min-h-[22rem] sm:-mx-8 lg:col-span-6 lg:ml-0 lg:mr-[min(-3rem,calc((80rem_-_100vw)/2_-_3rem))] lg:min-h-full">
          <Image
            src={photos.scrivaniaLaterale.src}
            alt={photos.scrivaniaLaterale.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[60%_40%]"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
