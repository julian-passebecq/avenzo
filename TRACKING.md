# Tracking and analytics

The public site is static HTML/CSS/JavaScript hosted on Vercel.

## Important

Google Tag Manager, GA4 and Meta Pixel do **not** require a backend.

For EU visitors, non-essential tracking should not load before valid consent. The repository therefore ships with tracking disabled by default.

## Configuration

Edit `tracking-config.js`:

```js
window.AVENZO_TRACKING = {
  enabled: true,
  consent: false,
  gtmId: "GTM-XXXXXXX",
  ga4Id: "",
  metaPixelId: ""
};
```

Recommended approach: use **Google Tag Manager** and manage GA4 / Meta through GTM rather than loading all three independently.

If `gtmId` is configured, the loader intentionally does not also load direct GA4/Meta tags.

## Consent

The loader only starts when both are true:

- `enabled: true`
- `consent: true`

A future cookie-consent component can start tracking after consent with:

```js
window.dispatchEvent(new CustomEvent("avenzo:tracking-consent", { detail: true }));
```

## Contact backend

The current contact form prepares an email in the visitor's mail client. No backend is required for that behavior.

If a server-side contact form is wanted later, add a Vercel Function such as `/api/contact` and connect it to an email provider. Keep provider API keys in Vercel Environment Variables, never in GitHub.

## Where the code lives

- `tracking-config.js` - tracking IDs and enable/consent flags
- `tracking.js` - safe loader
- Public HTML pages include both scripts at the end of `<body>`
