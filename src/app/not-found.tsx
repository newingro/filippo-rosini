import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export const metadata = { title: "Pagina non trovata", robots: { index: false } };

export default function NotFound() {
  return (
    <section>
      <div className="container-site py-28 lg:py-40">
        <p className="eyebrow">Errore 404</p>
        <h1 className="h1 mt-6 max-w-3xl">La pagina che cerchi non è disponibile.</h1>
        <p className="lead mt-7 max-w-2xl">
          Il collegamento potrebbe essere stato modificato o non essere più attivo. Puoi tornare alla homepage oppure
          consultare i servizi e le sedi dello studio.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Torna alla homepage
            <ArrowRight className="btn-arrow" />
          </Link>
          <Link href="/servizi" className="btn btn-outline">
            Servizi
          </Link>
          <Link href="/contatti" className="btn btn-outline">
            Contatti
          </Link>
        </div>
      </div>
    </section>
  );
}
