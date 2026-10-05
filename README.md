# Sketchbook — Interactive Landing Page

A verified standalone workspace for the **Meng To — Sketchbook** landing-page experience, prepared as the clean baseline for future customization and upgrades.

The current version intentionally keeps the original visual language and interaction model intact. Future work can build on this baseline without first having to reconstruct the source or assets.

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
- Vite-based development and production build workflow

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
├── index.html                 # Main standalone landing page
├── public/
│   └── assets/                # Local images + fonts
├── package.json               # Vite scripts and project metadata
├── package-lock.json
├── README.md
├── .gitignore
└── dist/                      # Generated build output (git-ignored)
```

The implementation is deliberately kept lightweight: the current experience is delivered from a single HTML document with its required local assets.

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

Vite will print the local URL in the terminal.

### Production build

```bash
npm run build
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

## 🎛️ Current Baseline

This repository is intentionally kept close to the verified source implementation.

That gives us a stable starting point for the next phase, where we can progressively add our own:

- content and branding
- typography changes
- animations and transitions
- section redesigns
- UX improvements
- performance optimizations
- responsive refinements
- new interactions and visual effects

Changes should be introduced incrementally so the original working baseline remains easy to compare and debug.

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
main
```

---

## 🗺️ Roadmap

The repository is currently at the **verified baseline stage**.

Next phase: customize the experience to our own requirements while preserving the strong parts of the original interaction system.

> **Baseline first. Customize second. Refine continuously.**
