# Sketchbook — Personal Portfolio / Journal Foundation

A personal website foundation built around an interactive, tactile sketchbook experience.

The original **Meng To — Sketchbook** interaction from ThreeUI is preserved as the signature visual experience, but the project is no longer just a landing page. It now has a scalable Astro architecture for personal identity, portfolio projects, case studies, journal posts, SEO, and future interactive experiments.

> **Let the interaction create the first impression. Let the content carry the story.**

---

## ✦ Highlights

- Tactile **sketchbook / editorial** visual style
- Realistic **curved page-turn** interaction
- **Draggable magnifying glass** with live magnification
- Smooth **zoom controls**
- Subtle **pointer-based 3D tilt**
- Keyboard navigation with **← / →**
- Interactive **nine-plate index**
- Responsive desktop/mobile layout
- Localized assets for a **self-contained runtime**
- Astro + TypeScript development and production build workflow
- Typed Markdown content collections for projects and journal posts
- Static output with RSS and sitemap generation
- SEO-ready canonical and Open Graph metadata

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
├── public/
│   └── assets/                # Local images + fonts
├── src/
│   ├── components/            # Navigation, portfolio, journal, Sketchbook
│   ├── data/                  # Site config + Markdown content
│   ├── layouts/               # Shared page shell
│   ├── pages/                 # Home, Work, Journal, About, Sketchbook, RSS
│   ├── styles/                # Design tokens + global styles
│   └── content.config.ts      # Typed content collections
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── dist/                      # Generated build output (git-ignored)
```

The implementation is mostly static by design. The Sketchbook interaction is isolated as a reusable component while projects and journal entries are content-driven.

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

### Production URL

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
/work/<project>/
/journal/
/journal/<article>/
/sketchbook/
/rss.xml
/sitemap-index.xml
```

---

## ✅ Verification

The original source snapshot was inspected and compared against the live ThreeUI page before this workspace was assembled.

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

Runtime asset references were then localized to `/assets/*`, so the page does not depend on the original remote media hosts during normal local execution.

---

## 🎛️ Current Architecture

The original interaction has been separated from the application shell so the same Sketchbook experience can be reused as a homepage hero or a dedicated `/sketchbook/` page.

The site now has:

- personal Home page
- Work index + dynamic case studies
- Journal index + dynamic articles
- About page
- reusable navigation and footer
- typed project/journal content collections
- RSS feed
- sitemap
- canonical / Open Graph / Twitter metadata
- reduced-motion and keyboard-friendly interaction patterns
- local self-hosted assets

Future work should continue incrementally so the verified Sketchbook behavior remains easy to compare and debug.

---

## 🙏 Special Thanks & Credit

### ThreeUI

**Special thanks to [ThreeUI](https://threeui.com/) for the original Sketchbook landing-page implementation, interaction design, and source experience that serves as the foundation of this workspace.**

Original reference:

**[ThreeUI — Meng To Sketchbook](https://threeui.com/landing-pages/meng-to-sketchbook.html)**

The project is being used as a development baseline for further customization and experimentation. Original attribution is intentionally preserved here as part of the project documentation.

### Meng To

Credit to **Meng To** for the original Sketchbook concept, visual direction, and illustrated Singapore subject matter presented by the referenced experience.

---

## 📌 Repository

Git remote:

```text
https://github.com/itssourov13/sketchbook.git
```

Current branch:

```text
feature/personal-site-upgrade
```

The branch is intentionally separate from `main`. No push is performed automatically.

---

## 🗺️ Upgrade Progress

The first 12 upgrade phases are complete on the dedicated feature branch:

```text
[x] Phase 1  — Astro + TypeScript foundation
[x] Phase 2  — Reusable Sketchbook extraction
[x] Phase 3  — Global design system + site chrome
[x] Phase 4  — Typed Work + Journal content system
[x] Phase 5  — Personal homepage
[x] Phase 6  — About + configurable identity
[x] Phase 7  — Case-study navigation / showcase polish
[x] Phase 8  — Journal reading experience
[x] Phase 9  — SEO + RSS + sitemap
[x] Phase 10 — Performance pass
[x] Phase 11 — Accessibility / reduced motion pass
[x] Phase 12 — Production QA
```

Next direction: richer case-study media, search/filtering, responsive image formats, analytics, deployment automation, and additional interactive experiments.
