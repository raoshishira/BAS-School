# Project Context: BAS International School Website

## 🧠 AI Agent Context
This file serves as a persistent context for AI agents working on this project. It outlines the architectural decisions, recent changes, and project structure to ensure continuity.

### 📅 Last Updated: 28 December 2025

## 🏗️ Architecture
- **Framework:** Astro 5.x (Static Site Generation)
- **Styling:** Tailwind CSS 4.x
- **UI Components:** React 19.x (integrated via `@astrojs/react`)
- **Content:** MDX (Markdown with JSX)
- **Routing:** File-based routing (`src/pages`) + Content Collections (`src/content`)

## ⚙️ Configuration
- **Global Config:** `src/config/config.json` (Site title, metadata, contact info)
- **Menus:** `src/config/menu.json` (Header and Footer navigation)
- **Social Links:** `src/config/social.json`
- **Content Collections:** `src/content.config.ts` (Defines schemas for Homepage, About, Features, Contact, etc.)

## 🔄 Recent Changes (Cleanup & Optimization)
1.  **Rebranding:**
    - Renamed project/theme references from "Pinwheel" to "Think Unlimited".
    - Updated `package.json` and meta tags.

2.  **SEO Overhaul:**
    - **Schema Markup:** Added `src/layouts/components/Schema.astro` which generates `School` JSON-LD data.
    - **Robots.txt:** Updated to include the Sitemap URL.
    - **Meta Tags:** Refined `meta_description` in `config.json`.

3.  **Codebase Cleanup (Removed Unused Assets):**
    - **Deleted Collections:** Blog, Careers, Integrations, Pricing, How-it-works.
    - **Deleted Pages:** Login, Signup, Password Reset, Terms & Conditions, Elements.
    - **Deleted Components:** Unused layouts, JSX function components (PricingCard, JobPosts, etc.), and images.
    - **Refactoring:** 
        - Removed `src/pages/[regular].astro` (generic page handler).
        - Moved `404.md` to a new `not-found` collection to fix build errors.
        - Updated `src/pages/404.astro` to consume the new collection.

## 📂 Key Directories
- `src/content/`: Source of truth for page content (Markdown/MDX).
- `src/layouts/`: Astro layout templates (`Base.astro` is the main wrapper).
- `src/pages/`: Route definitions.
- `public/`: Static assets (images, PDFs, robots.txt).

## 🚀 Future Maintenance Notes
- **Adding Pages:** Create a new `.astro` file in `src/pages/` or define a new content collection if the page follows a template pattern.
- **Editing Content:** Most text content can be updated directly in the markdown files within `src/content/`.
- **Images:** Place new images in `public/images/` and reference them in markdown frontmatter.

---
*Refer to this file before making major structural changes.*
