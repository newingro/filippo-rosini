import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ReviewNote } from "@/components/ToConfirm";

export function LegalPage({
  title,
  path,
  lead,
  updated,
  children,
}: {
  title: string;
  path: string;
  lead: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        crumbs={[{ name: title, path }]}
        eyebrow="Informazioni legali"
        title={title}
        lead={
          <p>
            {lead}
            <ReviewNote
              label="Bozza da validare"
              note="Testo da aggiornare alla configurazione definitiva del sito e da far validare prima della pubblicazione."
            />
          </p>
        }
      />
      <section className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="legal max-w-3xl">
            {children}
            <p className="mt-14 border-t border-line-warm pt-6 text-[0.875rem] text-muted">Ultimo aggiornamento: {updated}</p>
          </div>
        </div>
      </section>
    </>
  );
}
