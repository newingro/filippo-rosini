import Link from "next/link";

export function Monogram({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const color = tone === "dark" ? "text-navy border-bronze" : "text-ivory border-bronze";
  return (
    <span
      aria-hidden="true"
      className={`relative grid size-11 shrink-0 place-items-center border ${color} font-serif text-[1.3rem] font-medium leading-none tracking-[-0.04em] ${className}`}
    >
      <span className="translate-y-[1px]">
        F<span className="italic">R</span>
      </span>
    </span>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const title = tone === "dark" ? "text-navy" : "text-ivory";
  const sub = tone === "dark" ? "text-muted" : "text-ivory/70";
  return (
    <Link href="/" className="group inline-flex items-center gap-3 sm:gap-3.5" aria-label="Studio Rosini – Homepage">
      <Monogram tone={tone} />
      <span className="flex flex-col">
        <span className={`whitespace-nowrap font-sans text-[0.8125rem] font-bold leading-none tracking-[0.2em] min-[400px]:tracking-[0.28em] sm:tracking-[0.3em] ${title}`}>
          STUDIO ROSINI
        </span>
        <span className={`mt-1.5 whitespace-nowrap font-serif text-[1rem] italic leading-none ${sub}`}>Dott. Filippo Rosini</span>
      </span>
    </Link>
  );
}
