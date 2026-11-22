import type { StaticImageData } from "next/image";
import vetrata from "@/assets/photos/filippo-rosini-vetrata.jpg";
import vetrataMobile from "@/assets/photos/filippo-rosini-vetrata-mobile.jpg";
import ritratto from "@/assets/photos/filippo-rosini-ritratto.jpg";
import scrivania from "@/assets/photos/filippo-rosini-scrivania.jpg";
import inPiedi from "@/assets/photos/filippo-rosini-in-piedi.jpg";
import bracciaIncrociate from "@/assets/photos/filippo-rosini-braccia-incrociate.jpg";
import ufficioVista from "@/assets/uffici/ufficio-vista.jpg";
import ufficioLibreria from "@/assets/uffici/ufficio-libreria.jpg";
import ufficioQuadro from "@/assets/uffici/ufficio-quadro.jpg";
import ufficioCredenza from "@/assets/uffici/ufficio-credenza.jpg";
import ufficioVetrata from "@/assets/uffici/ufficio-vetrata.jpg";

export type Photo = { src: StaticImageData; alt: string };

/** Ritratti di Filippo Rosini forniti dallo studio. */
export const photos = {
  vetrata: {
    src: vetrata,
    alt: "Filippo Rosini nel suo studio, in piedi accanto alla vetrata, con lo sguardo rivolto all'esterno",
  },
  vetrataMobile: {
    src: vetrataMobile,
    alt: "Filippo Rosini nel suo studio, in piedi accanto alla vetrata",
  },
  ritratto: {
    src: ritratto,
    alt: "Ritratto del Dott. Filippo Rosini, giacca scura e maglia nera, nel suo studio",
  },
  scrivania: {
    src: scrivania,
    alt: "Filippo Rosini seduto alla scrivania dello studio, con le mani giunte e il computer portatile",
  },
  inPiedi: {
    src: inPiedi,
    alt: "Filippo Rosini in piedi nel suo studio, con le mani in tasca, davanti alla vetrata",
  },
  bracciaIncrociate: {
    src: bracciaIncrociate,
    alt: "Filippo Rosini a figura intera, a braccia incrociate, nello studio",
  },
} satisfies Record<string, Photo>;

/** Dettagli degli ambienti dello studio (senza persone). */
export const offices = {
  vista: { src: ufficioVista, alt: "Vetrata dello studio affacciata sul verde" },
  libreria: { src: ufficioLibreria, alt: "Libreria dello studio con volumi e una sfera armillare" },
  quadro: { src: ufficioQuadro, alt: "Opera d'arte astratta appesa alla parete dello studio" },
  credenza: { src: ufficioCredenza, alt: "Credenza dello studio con libri, una pianta e una fotografia incorniciata" },
  vetrata: { src: ufficioVetrata, alt: "Infissi della vetrata dello studio con vista sugli alberi" },
} satisfies Record<string, Photo>;
