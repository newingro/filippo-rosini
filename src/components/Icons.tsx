import type { SVGProps } from "react";
import type { ServiceIconName } from "@/content/services";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 20 20" width={18} height={18} {...base} {...p}>
    <path d="M3.5 10h12.5M11.5 5.5 16 10l-4.5 4.5" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 20 20" width={16} height={16} {...base} {...p}>
    <path d="M6 14 14 6M7.5 6H14v6.5" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M5.5 3.5h3l1.5 4-2 1.25a11 11 0 0 0 5.25 5.25L14.5 12l4 1.5v3a2 2 0 0 1-2 2A13 13 0 0 1 3.5 5.5a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
    <path d="m4 6.5 8 6 8-6" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.25" />
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg viewBox="0 0 20 20" width={18} height={18} {...base} {...p}>
    <path d="M10 3.5v13M3.5 10h13" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 20 20" width={16} height={16} {...base} {...p}>
    <path d="m4 10.5 3.5 3.5L16 5.5" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...p}>
    <path d="M3.5 8.5h17M3.5 15.5h17" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

const serviceIconPaths: Record<ServiceIconName, React.ReactNode> = {
  // Persone: rapporti di lavoro
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.25" />
      <path d="M16 14.2a4.5 4.5 0 0 1 4.5 4.3" />
    </>
  ),
  // Registro contabile
  ledger: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="0.5" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
    </>
  ),
  // Rete: compagine societaria
  network: (
    <>
      <circle cx="12" cy="5.5" r="2" />
      <circle cx="5.5" cy="18" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M11 7.3 6.5 16.2M13 7.3l4.5 8.9M7.5 18h9" />
    </>
  ),
  // Documento con verifica
  document: (
    <>
      <path d="M14 3.5H6.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8Z" />
      <path d="M14 3.5V8h4.5" />
      <path d="m9 14 2 2 4-4.5" />
    </>
  ),
  // Paragrafo: ambito legale
  paragraph: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14 8.25c-.5-.9-1.3-1.25-2.2-1.25-1.2 0-2.1.7-2.1 1.7 0 2.3 4.6 1.6 4.6 4.3 0 1-.8 1.7-1.9 1.9M10 15.75c.5.9 1.3 1.25 2.2 1.25 1.2 0 2.1-.7 2.1-1.7 0-2.3-4.6-1.6-4.6-4.3 0-1 .8-1.7 1.9-1.9" />
    </>
  ),
  // Crescita: finanziamenti
  growth: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 17v-3.5M11 17v-6M15.5 17V8" />
      <path d="m5.5 9 4-3.5 3 2.5 6-4.5M15.5 3.5h3v3" />
    </>
  ),
  // Chiave: avvio d'impresa
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h8.5M17 12v3M20 12v2.5" />
    </>
  ),
};

export function ServiceIcon({ name, ...p }: { name: ServiceIconName } & P) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} {...base} strokeWidth={1.2} {...p}>
      {serviceIconPaths[name]}
    </svg>
  );
}
