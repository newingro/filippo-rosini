import type { StaticImageData } from "next/image";
import ritrattoHero from "@/assets/photos/filippo-rosini-ritratto-hero.jpg";
import scrivaniaFrontale from "@/assets/photos/filippo-rosini-scrivania-frontale.jpg";
import scrivaniaLaterale from "@/assets/photos/filippo-rosini-scrivania-laterale.jpg";
import alComputer from "@/assets/photos/filippo-rosini-al-computer.jpg";
import scrivaniaVerticale from "@/assets/photos/filippo-rosini-scrivania-verticale.jpg";
import figuraIntera from "@/assets/photos/filippo-rosini-figura-intera.jpg";
import figuraInteraFrontale from "@/assets/photos/filippo-rosini-figura-intera-frontale.jpg";
import figuraInteraSorriso from "@/assets/photos/filippo-rosini-figura-intera-sorriso.jpg";
import profilo from "@/assets/photos/filippo-rosini-profilo.jpg";
import profiloBusto from "@/assets/photos/filippo-rosini-profilo-busto.jpg";
import profiloBraccia from "@/assets/photos/filippo-rosini-profilo-braccia-incrociate.jpg";
import bracciaIncrociate from "@/assets/photos/filippo-rosini-braccia-incrociate.jpg";

export type Photo = { src: StaticImageData; alt: string };

/** Fotografie originali di Filippo Rosini: nessuna immagine stock, nessuna alterazione del volto. */
export const photos = {
  hero: {
    src: ritrattoHero,
    alt: "Il Dott. Filippo Rosini in piedi nel suo studio, a braccia incrociate, davanti a una vetrata",
  },
  scrivaniaFrontale: {
    src: scrivaniaFrontale,
    alt: "Filippo Rosini seduto alla scrivania del suo studio, con le mani giunte, guarda verso l'obiettivo",
  },
  scrivaniaLaterale: {
    src: scrivaniaLaterale,
    alt: "Filippo Rosini alla scrivania dello studio, con computer portatile e documenti di lavoro",
  },
  alComputer: {
    src: alComputer,
    alt: "Filippo Rosini al lavoro alla scrivania dello studio",
  },
  scrivaniaVerticale: {
    src: scrivaniaVerticale,
    alt: "Filippo Rosini nel suo ufficio, seduto alla scrivania",
  },
  figuraIntera: {
    src: figuraIntera,
    alt: "Filippo Rosini in piedi nello studio, davanti alla vetrata",
  },
  figuraInteraFrontale: {
    src: figuraInteraFrontale,
    alt: "Ritratto a figura intera di Filippo Rosini nello studio",
  },
  figuraInteraSorriso: {
    src: figuraInteraSorriso,
    alt: "Filippo Rosini sorridente, ritratto a figura intera nello studio",
  },
  profilo: {
    src: profilo,
    alt: "Filippo Rosini di profilo, rivolto verso la vetrata dello studio",
  },
  profiloBusto: {
    src: profiloBusto,
    alt: "Filippo Rosini di profilo, lo sguardo rivolto verso la vetrata",
  },
  profiloBraccia: {
    src: profiloBraccia,
    alt: "Filippo Rosini di profilo a braccia incrociate, nello studio",
  },
  bracciaIncrociate: {
    src: bracciaIncrociate,
    alt: "Filippo Rosini a figura intera, a braccia incrociate, nello studio",
  },
} satisfies Record<string, Photo>;
