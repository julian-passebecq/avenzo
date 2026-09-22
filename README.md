# Avenzo Studio

Static website for **Avenzo Studio**.

## Canonical business source of truth

Before changing copy, positioning, layout, typography, interaction, imagery, SEO structure, or public page architecture, read:

- `SOURCE_OF_TRUTH.json`
- `source_of_truth/manifest.json`

The source-of-truth directory separates:

- company/business positioning
- canonical page content
- design and interaction preferences
- cleaned business-only message history
- supplied asset provenance
- implementation audit / known gaps

This avoids using old prototypes or stale README notes as requirements.

## Current public direction

- **4 public pages:** Accueil, Services, Solutions, Contact
- **Portfolio hidden** until approved client references exist
- **Global agency positioning:** strategy, digital, e-commerce, business development, trade shows and international development
- China is a specialist capability, not the whole brand identity
- **Cormorant Garamond** for headings, semibold/bold
- **Inter Regular** for body text and navigation
- banner-led visual language
- more whitespace and fewer rectangular boxes
- simple interaction: click an expertise/service → corresponding detailed section
- hero focus: **Ensemble, on avance.**
- no hero France-China map in the current approved direction
- no decorative Chinese characters in public pages
- avoid decorative numbering and obvious separator lines

The latest 18-page business review is preserved separately in `BUSINESS_FEEDBACK_2026-09-22.json`.

## Production routes

- `/` — Accueil
- `/services` — Services
- `/solutions` — Solutions
- `/contact` — Contact

## Development concepts

- `/dev` — concept selector
- `/dev/editorial` — historical interactive/editorial experiment
- `/dev/cinematic` — historical dark/global cinematic experiment

These routes are prototypes only. They are not business requirements.

## Hosting

Primary host: **Vercel**

Current production URL:

`https://avenzo-kappa.vercel.app/`

Netlify configuration remains only as a temporary fallback.

## Tracking

Optional GTM / GA4 / Meta tracking support exists but is disabled by default.

See `TRACKING.md`.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
