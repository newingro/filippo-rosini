import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Vecchio dominio: quando studiorosinifilippo.it verrà collegato a questo progetto Vercel,
      // ogni URL viene reindirizzato in modo permanente alla homepage del nuovo dominio.
      // Le corrispondenze puntuali (vecchia pagina -> nuova pagina) vanno aggiunte qui sotto
      // dopo aver esportato l'elenco delle URL indicizzate da Google Search Console.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?studiorosinifilippo\\.it" }],
        destination: "https://studiorosini.it/",
        permanent: true,
      },
      // Percorsi brevi e comuni verso le nuove pagine
      { source: "/chi-siamo", destination: "/filippo-rosini", permanent: true },
      { source: "/biografia", destination: "/filippo-rosini", permanent: true },
      { source: "/contatti-e-sedi", destination: "/contatti", permanent: true },
      { source: "/blog", destination: "/approfondimenti", permanent: true },
      { source: "/news", destination: "/approfondimenti", permanent: true },
    ];
  },
};

export default nextConfig;
