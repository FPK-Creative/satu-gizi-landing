# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Satu Gizi** — Landing page for an Indonesian nutrition platform targeting SPPG (Satuan Pelayanan Pangan) managers, nutritionists, and dietitians. The platform offers free MBG (Makan Bergizi Gratis) meal planning tools and paid clinical nutrition calculators.

- **Target URL:** satugizi.id
- **Language:** Indonesian (Bahasa Indonesia)

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview built site locally
```

No test runner or linter is configured yet.

## Tech Stack

- **Astro v6** (static site) with MDX integration
- **Node.js >= 22.12.0** required
- **TypeScript** (strict config extending `astro/tsconfigs/strict`)
- **Content Collections** with Zod schemas for blog posts
- Integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`, `sharp`

## Architecture

```
src/
  pages/           # File-based routing (.astro files)
  components/      # Reusable UI components (BaseHead, Header, Footer, etc.)
  layouts/         # Page layouts (BlogPost)
  content/blog/    # MDX blog posts with frontmatter validation
  styles/global.css # Global CSS (currently Bear Blog defaults)
  assets/fonts/    # Local font files (Atkinson)
  consts.ts        # Site-wide constants (title, description)
docs/
  landing-page.md  # Full PRD with section-by-section content spec
  brand-guidlines.md # Brand guidelines (colors, typography, voice)
```

- `src/pages/` uses Astro file-based routing — each `.astro` file becomes a route
- `src/components/BaseHead.astro` handles all SEO meta tags (OG, Twitter Cards)
- Blog content uses Astro Content Collections with Zod-validated frontmatter
- `src/consts.ts` exports `SITE_TITLE` and `SITE_DESCRIPTION` used across pages

## Current State

The codebase is a **stock Astro blog template** (Bear Blog style). The actual Satu Gizi landing page described in `docs/landing-page.md` has **not been implemented yet**. Key gaps:

- Site constants still say "Astro Blog" / "Welcome to my website!" — need updating to Satu Gizi branding
- No Tailwind CSS yet (PRD calls for Tailwind)
- No landing page sections implemented (Hero, Social Proof, Pricing, FAQ, etc.)
- No React islands for interactive elements (forms, accordion, carousel)
- Colors, typography, and fonts are all template defaults — need migration to brand guidelines

## Brand Guidelines (from docs/)

**Primary Colors:**
- Satu Gizi Green: `#2D7A3E` / `#1B6B4A`
- Energy Orange: `#FF8A3D` / `#F5A623`
- Accent Light Green: `#E8F5EE`
- Background: `#FAFDF7` / `#FFFFFF`

**Typography (target):**
- Headings: Plus Jakarta Sans Bold/SemiBold (Google Fonts)
- Body: Inter Regular/Medium
- Data/Numbers: JetBrains Mono

**Tone:** Professional yet approachable, evidence-based, empowering, non-judgmental. Always in Bahasa Indonesia.

## Key Reference Documents

- `docs/landing-page.md` — Complete PRD with 10 sections, content copy, pricing tiers, SEO keywords, analytics events, and A/B test plans
- `docs/brand-guidlines.md` — Full brand system: logo usage, color palette with psychology, typography hierarchy, iconography style, tone of voice per audience, content strategy with 7 pillars
