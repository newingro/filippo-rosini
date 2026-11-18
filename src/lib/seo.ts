import type { Metadata } from "next";
import { SITE_URL, locations, studio, type Location } from "@/content/site";
import { services, type Service } from "@/content/services";
import { IS_LIVE } from "@/lib/review";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Titolo completo senza il suffisso " | Studio Rosini" */
  absoluteTitle?: boolean;
};

export const OG_IMAGE = {
  url: "/og-studio-rosini.jpg",
  width: 1200,
  height: 630,
  alt: "Studio Rosini – Dott. Filippo Rosini, consulenza a Pistoia, Prato e Osmannoro",
};

export function pageMetadata({ title, description, path, absoluteTitle }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: studio.name,
      title: absoluteTitle ? title : `${title} | ${studio.name}`,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
    robots: IS_LIVE ? undefined : { index: false, follow: false },
  };
}

/* ---------- JSON-LD ---------- */

const ORG_ID = `${SITE_URL}/#studio`;
const PERSON_ID = `${SITE_URL}/#filippo-rosini`;

function postalAddress(l: Location) {
  return {
    "@type": "PostalAddress",
    streetAddress: l.street.value,
    postalCode: l.postalCode.value,
    addressLocality: l.locality,
    addressRegion: l.province,
    addressCountry: "IT",
  };
}

export function locationJsonLd(l: Location) {
  // Solo sedi con indirizzo verificato entrano nei dati strutturati.
  if (!l.addressConfirmed) return null;
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/sedi/${l.slug}#sede`,
    name: `${studio.name} – Sede di ${l.city}`,
    url: `${SITE_URL}/sedi/${l.slug}`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    email: studio.email,
    ...(l.phone.confirmed && l.phone.value ? { telephone: `+39 ${l.phone.value}` } : {}),
    address: postalAddress(l),
    ...(l.geo.confirmed && l.geo.value
      ? { geo: { "@type": "GeoCoordinates", latitude: l.geo.value.lat, longitude: l.geo.value.lng } }
      : {}),
    parentOrganization: { "@id": ORG_ID },
    areaServed: { "@type": "AdministrativeArea", name: l.city },
  };
}

export function siteJsonLd() {
  const main = locations[0];
  const departments = locations.map(locationJsonLd).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: studio.name,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        image: `${SITE_URL}${OG_IMAGE.url}`,
        description: studio.positioning,
        email: studio.email,
        telephone: `+39 ${main.phone.value}`,
        address: postalAddress(main),
        foundingDate: String(studio.since),
        founder: { "@id": PERSON_ID },
        ...(studio.vatId.confirmed ? { vatID: `IT${studio.vatId.value}` } : {}),
        areaServed: ["Pistoia", "Prato", "Firenze", "Toscana"].map((name) => ({ "@type": "Place", name })),
        department: departments,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servizi di consulenza",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: `${SITE_URL}/servizi/${s.slug}` },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: studio.professional,
        jobTitle: studio.shortQualification,
        url: `${SITE_URL}/filippo-rosini`,
        image: `${SITE_URL}${OG_IMAGE.url}`,
        worksFor: { "@id": ORG_ID },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: studio.name,
        inLanguage: "it-IT",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function serviceJsonLd(s: Service) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        description: s.intro,
        url: `${SITE_URL}/servizi/${s.slug}`,
        serviceType: s.title,
        provider: { "@id": ORG_ID },
        areaServed: ["Pistoia", "Prato", "Sesto Fiorentino"].map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function locationPageJsonLd(l: Location) {
  const node = locationJsonLd(l);
  return node ? { "@context": "https://schema.org", ...node } : null;
}
