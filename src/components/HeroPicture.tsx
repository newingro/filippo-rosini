import { getImageProps } from "next/image";
import type { Photo } from "@/content/photos";

/** Immagine hero con art direction: inquadratura diversa per desktop e smartphone. */
export function HeroPicture({
  desktop,
  mobile,
  className = "",
}: {
  desktop: Photo;
  mobile: Photo;
  className?: string;
}) {
  const common = { alt: desktop.alt, sizes: "100vw", quality: 85 } as const;
  const {
    props: { srcSet: desktopSet },
  } = getImageProps({ ...common, src: desktop.src });
  const {
    props: { srcSet: mobileSet, ...rest },
  } = getImageProps({ ...common, src: mobile.src, loading: "eager", fetchPriority: "high" });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopSet} sizes="100vw" />
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...rest} srcSet={mobileSet} className={className} />
    </picture>
  );
}
