---
title: Content-First Personal Site
description: A structured foundation for portfolio work, technical notes, and long-form journal entries.
year: 2026
role: Site architecture / frontend systems
type: Personal website
featured: true
status: published
stack:
  - Astro
  - TypeScript
  - Markdown
  - Content Collections
image: /assets/botany-left.png
accent: '#6d5944'
---

## The idea

A personal site should make adding the next project or article cheaper than redesigning the page around it.

The architecture therefore separates presentation from content: project entries describe the work, journal entries describe the writing, and shared layouts decide how those entries are presented.

## The system

Projects and journal posts are typed collections with shared schemas. Routes are generated from the collection entries, while cards and detail layouts stay reusable.

This makes the site practical as a living archive instead of a single polished homepage.

## The next layer

The same content model can later drive search, tags, RSS, related posts, case-study navigation, and richer media without rebuilding the information architecture.
