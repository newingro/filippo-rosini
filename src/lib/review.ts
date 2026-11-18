/**
 * Modalità anteprima: attiva finché NEXT_PUBLIC_SITE_LIVE non è "true".
 * In anteprima il sito non è indicizzabile e mostra le note "Da confermare".
 */
export const IS_LIVE = process.env.NEXT_PUBLIC_SITE_LIVE === "true";
export const REVIEW_MODE = !IS_LIVE;
