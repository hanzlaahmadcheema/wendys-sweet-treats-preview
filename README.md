# Wendy's Sweet Treats — Preview Website

Preview website for **Wendy's Sweet Treats** (4701 Staggerbrush Road,
Austin, TX 78749 — home bakery in the Amberwood area of Kyle, TX), built as a
client preview: the business reviews the site and tells us what to fix or
add, then decides whether to make it theirs.

- **Stack:** Next.js 15 (App Router, static export) + React 19 + Tailwind CSS 3
- **Deploy:** Vercel (git route, same pattern as the Smiles Dental Care and
  Phoenix Rise previews)
- **Design:** mobile-first, following the patterns of the top bakery sites
  (photo-led hero, menu cards with prices, one-click order path, Golosa Box
  feature, DM-to-order flow)

## Facts used (verified 2026-11-13)

- Home baker **Wendy Guajardo Gonzalez**; Facebook page
  facebook.com/102440194546859; no phone or email published — DM only.
- Specialties: empanadas (dulce de leche, pineapple), custom cakes, cupcakes
  (chocolate + cream cheese frosting), Mexican sweets.
- Verified prices: **Hojarascas norteñas $10 / 210 g bag**; **mini cookies
  $7 each / $12 combo of two**. Everything else: "DM for price" — no prices
  invented.
- The Golosa Box: buñuelos, alfajores (chocolate & pecan / regular), dulce de
  leche & pineapple empanadas.
- NOTE: Wendy posted 27 Oct 2026 that the bakery would close temporarily for
  surgery on 6 Nov 2026. No reopening post was found — the site claims neither
  open nor closed; the owner corrects it.

## Build / QC

- `npm run build` — static export to `out/`
- Playwright QC at `../qc/run-qc.py` (390px + 1440px): single h1, no
  horizontal overflow, DM links to the Facebook page, disclaimer banner,
  reveal animations, order-form validation + success state.

## Images

All photography is from Unsplash (CDN links, verified by downloading and
viewing each photo): chocolate drip cake (hero), raspberry layer cake
(custom cakes), mint cupcakes, chocolate chip cookies (Golosa Box).
