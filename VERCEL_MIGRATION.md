# Avenzo Studio — Vercel migration

## Goal

Vercel becomes the primary host while Netlify remains an emergency fallback until the Vercel deployment is validated.

## Repository layout

- `/` — stable public site
- `/dev/` — development concept selector
- `/dev/editorial/` — interactive/editorial concept
- `/dev/cinematic/` — spacious global/cinematic concept
- `/assets/` — shared static assets

## Vercel settings

This repository is a plain static HTML/CSS/JavaScript site. No framework, install command, or build command is required.

Recommended project settings:

- Framework Preset: **Other**
- Root Directory: **repository root**
- Build Command: **None**
- Output Directory: **repository root / default static output**
- Production Branch: **main**

`vercel.json` provides clean URLs, explicit DEV rewrites, security headers, and long-lived caching for `/assets/*`.

## Expected routes

- `/`
- `/dev`
- `/dev/editorial`
- `/dev/cinematic`

The trailing-slash variants should redirect to the clean URL because `trailingSlash` is disabled.

## Deployment workflow

1. Import `julian-passebecq/avenzo` into Vercel.
2. Keep the project root at the repository root.
3. Deploy `main` to production.
4. Verify all four routes above.
5. Verify CSS, JavaScript, and images load on the DEV routes.
6. Only after verification, attach the final custom domain (planned: `avenzostudios.com`).

## Rollback / fallback

- Git history remains the source of truth.
- Netlify configuration is intentionally retained during migration as a fallback.
- Do not remove `netlify.toml` until the Vercel production deployment has been accepted.

## No secrets required

The current site is static and does not require environment variables or serverless functions.
