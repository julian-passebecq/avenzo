# Avenzo Studio

Static website for **Avenzo Studio**.

## Current public direction

The production site follows Adrien's latest validated structure:

- **4 real pages:** Accueil, Services, Solutions, Contact
- **No public Portfolio** until client references are available
- **Global agency positioning:** strategy, digital, business development, trade shows and international development
- China remains a specialist capability, not the whole brand identity
- **Cormorant Garamond** for titles
- **Inter** for body text and navigation
- More whitespace, fewer rectangular UI cards
- Supplied imagery is used as **banner imagery**
- Core interaction preserved from the preferred Tuesday version:
  - click a service on the home page
  - open the Services page directly at the corresponding detailed section

## Production routes

- `/` — Accueil
- `/services` — Services
- `/solutions` — Solutions
- `/contact` — Contact

## Development concepts

- `/dev` — concept selector
- `/dev/editorial` — interactive/editorial experiment
- `/dev/cinematic` — dark/global cinematic experiment

These DEV concepts are retained for comparison and should not be promoted into production without explicit approval.

## Hosting

Primary host: **Vercel**

Current Vercel production URL:

`https://avenzo-kappa.vercel.app/`

Netlify configuration remains in the repository only as a temporary fallback.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.


## Latest homepage direction

- Main hero title: **Avenzo Studio**
- Secondary tagline: **L’accès à l’international, sans détour.**
- Small France ↔ China bridge visual under the title
- Four expertise choices use imagery instead of abstract icons
- First expertise visual features Shanghai / Shanghai Tower
- Homepage service images deep-link to the matching Services section


## Business review — 2026-09-22

The 18-page business feedback document has been converted into a structured implementation spec:

- `BUSINESS_FEEDBACK_2026-09-22.json`

Implemented direction:

- hero focus: **Ensemble, on avance.**
- no hero map or repeated large Avenzo branding
- navigation clustered on the right next to the project CTA
- **4 expertises** is the primary homepage expertise heading
- redundant brown labels removed where requested
- services keep the two-column structure but remove obvious separator lines
- solution categories are promoted visually; section numbering and separator rules are removed
- contact intro is rebalanced and Chinese characters are replaced by French wording
- structured footer navigation, robots and sitemap added for SEO
- optional Google/Meta tracking architecture added but disabled by default

See `TRACKING.md` before enabling any non-essential tracking.
