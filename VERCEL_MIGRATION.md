# Avenzo Studio — Vercel

## Production

- Project: `avenzo`
- Production URL: `https://avenzo-kappa.vercel.app/`
- Production branch: `main`
- Framework: static HTML / CSS / JavaScript
- Build command: none
- Environment variables: none required

## Public routes

- `/`
- `/services`
- `/solutions`
- `/contact`

## Comparison routes

- `/dev`
- `/dev/editorial`
- `/dev/cinematic`

`vercel.json` owns clean routing, security headers and long-lived asset caching.

## Git workflow

Vercel Git integration deploys pushes from `main` automatically.

The source of truth is:

`julian-passebecq/avenzo`

Do not edit production directly in the Vercel dashboard if the same change can be committed to GitHub.

## Rollback

Use Git history as the canonical rollback mechanism. Netlify configuration remains temporarily as an emergency fallback but is no longer the primary deployment target.

## Current product rules

- Keep the public site simple and spacious.
- Use four public pages.
- Keep Portfolio hidden.
- Keep Cormorant Garamond + Inter.
- Use supplied images as banners rather than filling the page with image cards.
- Preserve direct service navigation: homepage service → matching detailed Services section.
- Keep the agency globally positioned; China is one international capability.
