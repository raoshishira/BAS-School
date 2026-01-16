# Project Context: BAS International School Website

## 🧠 AI Agent Context
This file serves as a persistent context for AI agents working on this project. It outlines the architectural decisions, recent changes, and project structure to ensure continuity.

### 📅 Last Updated: 16 January 2026

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
- **Content Collections:** `src/content.config.ts` (Defines schemas for active collections)

## 🔄 Recent Changes & Milestones

### 🛡️ Security & Maintenance (Jan 16, 2026)
- **Vulnerability Fixes**: Resolved security issues in `vite`, `astro`, and `mdast-util-to-hast` via `npm audit fix`.
- **Build Verification**: Confirmed production build success with a lean 6-page output.

### 🎨 Branding & Identity
- **Full Rebranding**: Removed all "Pinwheel" and "Themefisher" references across the codebase (package.json, LICENSE, content files).
- **Ownership**: Updated all copyright and author tags to **Think Unlimited**.
- **Placeholder Cleanup**: Updated external links and placeholder assets to align with the school's brand.

### 🧹 Codebase Optimization
- **Structural Cleanup**: Deleted unused routes and collections (Blog, Careers, Integrations, Pricing, How-it-works, Auth pages).
- **Schema Refactoring**: Stripped down `src/content.config.ts` to support only active pages (Home, About, Amenities, Contact, Pages).
- **Media Optimization**: Purged 100+ unused dummy images to reduce project size.
- **Avatar Update**: Replaced missing student/parent avatars in testimonials with a generic brand placeholder.

## 📂 Key Directories
- `src/content/`: Source of truth for page content (Markdown/MDX).
- `src/layouts/`: Astro layout templates (`Base.astro` is the main wrapper).
- `src/pages/`: Route definitions.
- `public/`: Static assets (images, PDFs, robots.txt).

## 🚀 Future Maintenance Notes
- **Adding Pages:** Create a new `.astro` file in `src/pages/` or define a new content collection.
- **Editing Content:** Most text can be updated directly in the `.md` or `.mdx` files within `src/content/`.
- **Mandatory Disclosures**: Update the `disclosures` array in `src/pages/mandatory-disclosures.astro` when adding new regulatory documents.

---
*Refer to this file before making major structural changes.*
