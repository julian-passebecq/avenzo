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
