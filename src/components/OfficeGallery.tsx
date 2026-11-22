import Image from "next/image";
import { offices, type Photo } from "@/content/photos";

function Tile({ photo, className, sizes, position = "50% 50%" }: { photo: Photo; className: string; sizes: string; position?: string }) {
  return (
    <figure className={`group relative overflow-hidden bg-ivory-deep ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
        style={{ objectPosition: position }}
      />
    </figure>
  );
}

/** Mosaico con i dettagli degli ambienti dello studio. */
export function OfficeGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-[36rem] lg:grid-cols-12 lg:grid-rows-2">
      <Tile
        photo={offices.vista}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="col-span-2 aspect-[4/3] lg:col-span-6 lg:row-span-2 lg:aspect-auto"
        position="50% 72%"
      />
      <Tile
        photo={offices.libreria}
        sizes="(min-width: 1024px) 16vw, 50vw"
        className="row-span-2 lg:col-span-2 lg:row-span-2"
        position="50% 45%"
      />
      <Tile photo={offices.quadro} sizes="(min-width: 1024px) 33vw, 50vw" className="aspect-square lg:col-span-4 lg:aspect-auto" />
      <Tile
        photo={offices.credenza}
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="aspect-square lg:col-span-4 lg:aspect-auto"
        position="50% 60%"
      />
    </div>
  );
}
