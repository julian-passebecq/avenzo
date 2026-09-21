# Avenzo Studio

Static multi-page/interactive website for **Avenzo Studio**.

## Public structure

- **Production:** `/`
- **DEV selector:** `/dev`
- **DEV 01 — Editorial / Interactive:** `/dev/editorial`
- **DEV 02 — Global / Cinematic:** `/dev/cinematic`

The current brand direction is broader than France ↔ China: strategy, digital, business development, trade shows/partnerships, and international growth. China remains a specialist capability rather than the entire brand proposition.

## Core pages/content

- Accueil
- Services
- Solutions
- Contact

Portfolio remains hidden until there are client references to show.

## Design rules currently agreed

- Titles: **Cormorant Garamond**, semibold/bold
- Text/navigation: **Inter**, regular
- Prefer whitespace and editorial bands over excessive rectangular cards
- Preserve the useful interaction: click a service → go to / update the relevant detailed section

## Hosting

**Primary migration target: Vercel.**

The repository now contains `vercel.json` for clean routes, security headers, DEV route rewrites, and asset caching. Netlify configuration is temporarily retained only as a migration fallback.

See `VERCEL_MIGRATION.md` for deployment details.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

See `CONTENT_AUDIT.md` for the source-content coverage audit.
