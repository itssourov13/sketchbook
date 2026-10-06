# Sketchbook — A Small Room for Words

A poetry-and-prose website built around a tactile visual sketchbook.

This project began with a page-turning sketchbook experience and grew into a quiet place for poems, prose, fragments, notes, images, and things that deserve to be read twice. The writing stays in the foreground; the interface is there to give it atmosphere without competing with it.

> **Some words are meant to linger.**

---

## ✦ What lives here

- A tactile **page-turning sketchbook** as the visual signature
- **Draggable magnifying glass** with live magnification
- Smooth **zoom controls**
- Subtle **pointer-based 3D tilt**
- Keyboard navigation with **← / →**
- Interactive **nine-plate index**
- Responsive desktop and mobile presentation
- Localized images and fonts for a **self-contained runtime**
- Astro + TypeScript build workflow
- Typed Markdown content collections for writing and notes
- Static output with RSS and sitemap generation
- Canonical, Open Graph, and Twitter metadata
- Reduced-motion and keyboard-friendly interaction patterns
- Vercel-ready deployment configuration

### Included Sketchbook Plates

1. Marina Bay Sands
2. Gardens by the Bay
3. The Merlion
4. Buddha Tooth Relic Temple
5. Joo Chiat Shophouses
6. Lau Pa Sat
7. Marina Bay Skyline
8. Singapore River
9. Botanic Gardens

---

## 🧱 Project Structure

```text
sketchbook/
├── astro.config.mjs          # Astro + sitemap configuration
├── vercel.json               # Explicit Vercel deployment settings
├── public/
│   └── assets/               # Local images + fonts
├── src/
│   ├── components/           # Navigation, writing UI, Sketchbook
│   ├── data/                 # Site configuration + Markdown content
│   ├── layouts/              # Shared page shell
│   ├── pages/                # Home, Writing, Notes, About, Sketchbook, RSS
│   ├── styles/               # Design tokens + global styles
│   └── content.config.ts     # Typed content collections
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

The implementation is intentionally mostly static. The Sketchbook interaction remains isolated as a reusable component, while the writing and notes are content-driven.

---

## 🚀 Getting Started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Astro will print the local URL in the terminal.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Site URL

Set `PUBLIC_SITE_URL` for deployment:

```bash
PUBLIC_SITE_URL=https://your-domain.example
```

The value is used for canonical URLs, Open Graph URLs, RSS links, and the generated sitemap. Until a real domain is configured, the build falls back to `https://example.com`.

### Main routes

```text
/
/about/
/work/
/work/<piece>/
/journal/
/journal/<note>/
/sketchbook/
/rss.xml
/sitemap-index.xml
```

---

## ▲ Deploying to Vercel

This project is a static Astro site, so it does not require the Astro Vercel adapter. Astro's current Vercel documentation describes static deployment as zero-configuration, while this repository includes an explicit `vercel.json` so the build and output settings are visible and reproducible.

The repository configuration is:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

The documented Vercel configuration supports `framework`, `buildCommand`, and `outputDirectory` in `vercel.json`.

### Git deployment

Push the repository to GitHub, import it into Vercel, and Vercel will detect Astro and deploy the static build. Future pushes can then create Preview Deployments and Production Deployments according to the connected branch configuration.

### CLI deployment

From the project root:

```bash
npm install -g vercel
vercel
```

Vercel can detect the Astro project automatically.

---

## ✅ Verification

The original Sketchbook source snapshot was inspected and compared against the live ThreeUI reference before the workspace was assembled.

**Verified source**

- Source: [ThreeUI — Meng To Sketchbook](https://threeui.com/landing-pages/meng-to-sketchbook.html)
- Extracted source: **1,038 lines**
- SHA-256: `518737cbcbd8250813613bca7c0bd06959b91a84d905de2b0f5ec8c32a5f9fcc`

The live source fetched directly from ThreeUI produced the same SHA-256.

### Assets

The workspace contains **17 required local assets**, including:

- 9 sketchbook plate images
- botanical / decorative artwork
- paper background and divider artwork
- Instrument Serif fonts
- Newsreader font

The assets were individually checked against the source manifest using byte count and SHA-256 verification.

Runtime asset references are localized to `/assets/*`, so the normal site does not depend on the original remote media hosts.

---

## 🎛️ Current Architecture

The original interaction is separated from the main application shell so the Sketchbook can be reused as a homepage hero or as the dedicated `/sketchbook/` page.

The site currently contains:

- Home page centered on the writing
- Writing index + individual pieces
- Notes index + individual notes
- About page
- Reusable navigation and footer
- Typed Markdown content collections
- RSS feed
- Sitemap
- Canonical / Open Graph / Twitter metadata
- Reduced-motion and keyboard-friendly interaction patterns
- Local self-hosted assets
- Explicit Vercel deployment configuration

Future work should continue incrementally so the verified Sketchbook behavior remains easy to compare and debug.

---

## ✦ Special Thanks & Credit

### ThreeUI

**Special thanks to [ThreeUI](https://threeui.com/) for the original Sketchbook landing-page implementation, interaction design, and source experience that serves as the foundation of this workspace.**

Original reference:

**[ThreeUI — Meng To Sketchbook](https://threeui.com/landing-pages/meng-to-sketchbook.html)**

The interaction is used here as a development baseline for further customization and experimentation. Original attribution is intentionally preserved in the project documentation.

### Meng To

Credit to **Meng To** for the original Sketchbook concept, visual direction, and illustrated Singapore subject matter presented by the referenced experience.

---

## 📌 Repository

Git remote:

```text
https://github.com/itssourov13/sketchbook.git
```

Development work is kept on dedicated branches before changes are merged into `main`.

No push is performed automatically.

---

## 🗺️ Upgrade Progress

The foundation and primary upgrade phases are complete:

```text
[x] Astro + TypeScript foundation
[x] Reusable Sketchbook extraction
[x] Global design system + site chrome
[x] Typed writing + notes content system
[x] Personal homepage
[x] About page
[x] Case-study / writing navigation
[x] Long-form reading experience
[x] SEO + RSS + sitemap
[x] Performance pass
[x] Accessibility / reduced motion pass
[x] Production QA
[x] Poetic writer-focused copy pass
[x] Vercel deployment configuration
```

Next direction: richer writing presentation, additional pieces, search/filtering, responsive image formats, analytics, and further visual experiments.
