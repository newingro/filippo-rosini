import type { ReactNode } from "react";
import { REVIEW_MODE } from "@/lib/review";

/**
 * Contenuto da confermare prima della pubblicazione.
 * - In anteprima: mostra il contenuto con un'etichetta "Da confermare".
 * - A sito pubblicato: mostra `fallback` (o nulla) finché il dato non viene confermato.
 */
export function ToConfirm({
  children,
  note,
  fallback = null,
  label = "Da confermare",
}: {
  children: ReactNode;
  note?: string;
  fallback?: ReactNode;
  label?: string;
}) {
  if (!REVIEW_MODE) return <>{fallback}</>;
  return (
    <>
      {children}
      <ReviewNote label={label} note={note} />
    </>
  );
}

export function ReviewNote({ label = "Da confermare", note }: { label?: string; note?: string }) {
  if (!REVIEW_MODE) return null;
  return (
    <span className="review-note" title={note}>
      <span aria-hidden="true">●</span>
      {label}
      {note ? <span className="sr-only">: {note}</span> : null}
    </span>
  );
}
