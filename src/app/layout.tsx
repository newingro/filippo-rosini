import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ReviewBar } from "@/components/ReviewBar";
import { RevealObserver } from "@/components/RevealObserver";
import { TopBar } from "@/components/TopBar";
import { SITE_URL, studio } from "@/content/site";
import { IS_LIVE } from "@/lib/review";
import { OG_IMAGE, siteJsonLd } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Studio Rosini | Dott. Filippo Rosini – Consulenza del lavoro, fiscale e societaria",
    template: "%s | Studio Rosini",
  },
  description:
    "Studio Rosini: il Dott. Filippo Rosini affianca imprese, professionisti e privati con consulenza del lavoro, fiscale, societaria e aziendale. Sedi a Pistoia, Prato e Osmannoro.",
  applicationName: studio.name,
  authors: [{ name: studio.professional }],
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { type: "website", locale: "it_IT", siteName: studio.name, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: IS_LIVE ? { index: true, follow: true } : { index: false, follow: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f7f5f1",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh bg-ivory">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
        >
          Vai al contenuto
        </a>
        <ReviewBar />
        <TopBar />
        <Header />
        <main id="contenuto" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <JsonLd data={siteJsonLd()} />
      </body>
    </html>
  );
}
