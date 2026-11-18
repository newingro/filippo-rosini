import { PlusIcon } from "@/components/Icons";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line-warm">
      {items.map((f) => (
        <details key={f.q} className="faq-item group border-b border-line-warm">
          <summary className="flex items-start justify-between gap-6 py-6 text-left">
            <h3 className="font-serif text-[1.375rem] leading-snug text-navy sm:text-[1.5rem]">{f.q}</h3>
            <span className="faq-icon mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-line-warm text-navy">
              <PlusIcon />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-12 leading-relaxed text-anthracite">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
