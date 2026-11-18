import { REVIEW_MODE } from "@/lib/review";

export function ReviewBar() {
  if (!REVIEW_MODE) return null;
  return (
    <div className="border-b border-[#e8d3a8] bg-[#fff7e8] text-[#6b4508]">
      <p className="container-site py-2 text-center text-[0.8125rem] leading-snug">
        <strong className="font-semibold">Anteprima di revisione.</strong> I contenuti contrassegnati come “Da
        confermare” vanno verificati prima della pubblicazione su studiorosini.it. Il sito non è indicizzato.
      </p>
    </div>
  );
}
