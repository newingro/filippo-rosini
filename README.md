# Studio Rosini – sito istituzionale

Sito di **Studio Rosini – Dott. Filippo Rosini**, destinato al dominio `studiorosini.it`.

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Pagine statiche (SSG), immagini ottimizzate AVIF/WebP, nessun cookie di terze parti
- Fotografie originali di Filippo Rosini in `src/assets/photos/` (ritaglio hero a mezzo busto e lieve correzione tonale uniforme; volto e proporzioni non alterati)

## Struttura

| Percorso | Contenuto |
| --- | --- |
| `/` | Homepage: hero, professionista, servizi, filosofia, sedi, contatto |
| `/filippo-rosini` | Biografia e percorso professionale |
| `/servizi` e `/servizi/[slug]` | Sette aree di consulenza con ambiti, destinatari e FAQ |
| `/sedi` e `/sedi/pistoia`, `/sedi/prato`, `/sedi/osmannoro` | Sedi con pagine locali |
| `/approfondimenti` | Sezione editoriale (vuota finché non ci sono articoli approvati) |
| `/contatti` | Modulo di contatto con validazione, antispam e invio email |
| `/privacy`, `/cookie-policy` | Bozze delle informative |

Tutti i testi e i dati sono in `src/content/`:

- `site.ts` – dati dello studio, sedi, citazione e timeline (con i flag `confirmed` / `approved`)
- `services.ts` – i sette servizi
- `articles.ts` – approfondimenti (sostituire `getArticles()` per collegare un CMS)

## Anteprima di revisione e messa online

Finché `NEXT_PUBLIC_SITE_LIVE` non vale `true`:

- il sito **non è indicizzabile** (`robots.txt` e meta `noindex`);
- compare una barra “Anteprima di revisione” e le etichette **“Da confermare”** accanto ai dati da verificare.

Impostando `NEXT_PUBLIC_SITE_LIVE=true` le etichette spariscono e i dati non confermati vengono nascosti automaticamente.

### Checklist prima della pubblicazione

- [ ] Titolo “Dott.”: verificare il titolo accademico che ne consente l'uso (in `site.ts`, `professionalWithTitle`).
- [ ] Qualifica: non usare “Dottore Commercialista” senza la relativa iscrizione all'albo.
- [ ] Coordinate geografiche delle tre sedi (per i dati strutturati) e orari di ricevimento.
- [ ] Partita IVA e dati professionali del footer (numero di iscrizione all'Ordine dei Consulenti del Lavoro di Pistoia).
- [ ] 2018 – studi presso l'Università Popolare di Milano: verifica documentale (`timeline`).
- [ ] Frase in prima persona nella biografia: approvazione di Filippo Rosini (`bioQuote.approved`).
- [ ] Privacy Policy e Cookie Policy: validazione legale.
- [ ] Modulo contatti: configurare Resend e verificare il dominio mittente (vedi sotto).
- [ ] Dominio `studiorosini.it` collegato al progetto Vercel; eventuale vecchio dominio `studiorosinifilippo.it` collegato per i redirect 301 (già configurati in `next.config.ts`).
- [ ] Google Search Console: `GOOGLE_SITE_VERIFICATION`, invio della sitemap `/sitemap.xml`.

## Variabili d'ambiente

Vedi `.env.example`.

| Variabile | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canonico (default `https://studiorosini.it`) |
| `NEXT_PUBLIC_SITE_LIVE` | `true` per pubblicare (indicizzazione attiva, etichette di revisione nascoste) |
| `RESEND_API_KEY` | Chiave per l'invio delle email del modulo contatti |
| `CONTACT_TO_EMAIL` | Destinatario delle richieste (default `f.rosini@studiorosini.it`) |
| `CONTACT_FROM_EMAIL` | Mittente, su dominio verificato in Resend |
| `GOOGLE_SITE_VERIFICATION` | Codice di verifica di Google Search Console |

Senza `RESEND_API_KEY` il modulo resta visibile ma, all'invio, invita l'utente a scrivere o telefonare allo studio.

## Sviluppo

```bash
npm install
npm run dev
```

```bash
npm run build
```
