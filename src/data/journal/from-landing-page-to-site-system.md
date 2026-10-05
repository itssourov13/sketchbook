---
title: From a Landing Page to a Site System
description: What changed when a highly interactive demo became the foundation for a real portfolio, blog, and showcase.
pubDate: 2026-10-05
category: Building in public
tags:
  - Astro
  - architecture
  - portfolio
  - frontend
featured: true
status: published
cover: /assets/botanic-gardens.png
readingTime: 5 min
---

A beautiful landing page is easy to keep beautiful when it has only one job.

A personal site has more jobs: introduce a person, show work, publish ideas, explain projects, make the next action obvious, and keep doing all of that as the content grows.

The first architectural decision here was therefore not to redesign the Sketchbook interaction. It was to stop making the interaction responsible for the entire website.

## Preserve the memorable part

The page-turning sketchbook is the signature. It has a real reason to exist: it communicates craft, curiosity, and attention before a visitor reads a long paragraph.

Instead of replacing it, the experience was isolated as a reusable component. That lets the rest of the site stay conventional where conventional structure helps.

## Give content a home

Projects and articles are now treated as content, not hard-coded sections. A new entry should be a file with metadata and writing, not a copy-paste of a page template.

That sounds like a small distinction. Over time it becomes the difference between a portfolio that is easy to update and one that slowly turns into a pile of one-off pages.

## Keep motion subordinate to meaning

The goal is not to make every section move. The goal is to give motion a hierarchy: signature interactions can be expressive, navigation can be subtle, and long-form content can remain calm enough to read.

That balance is what lets an interactive portfolio become a place to publish, not just a visual demo.
