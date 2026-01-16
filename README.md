<h1 align=center>BAS International School Website</h1>
<p align=center>Developed by <a href="https://thinkunlimited.in">Think Unlimited</a> using Astro, React, and Tailwind CSS</p>

<p align=center>
  <img src="https://img.shields.io/static/v1?label=ASTRO&message=5.x&color=orange&logo=astro" />
  <img src="https://img.shields.io/static/v1?label=Tailwind&message=4.x&color=blue&logo=tailwindcss" />
  <img src="https://img.shields.io/static/v1?label=React&message=19.x&color=blue&logo=react" />
</p>

## 📖 Project Overview

This is the official website for **BAS International School** (Muddebihal), designed to provide information about admissions, academics, facilities, and mandatory disclosures. The project is a highly optimized, SEO-friendly static site built with **Astro**.

<<<<<<< HEAD
- 📄 6 Essential pages
- 🎨 Highly customizable (Color, Font, Menu, Social Links, SEO Meta Tags, etc.)
- ⚡ Fast by default (95+ Google PageSpeed Score)
- 📝 Contact form support
- 🖼️ Support OG image
- 🎨 Built with Tailwind CSS framework
- 📱 Fully responsive on desktops, tablets, and smartphones
- 🔍 SEO Friendly

## 📄 Available Pages:

- 🏠 Home
- 👤 About
- 📞 Contact
- 🚀 Amenities (Features)
- 📜 Mandatory Disclosures
- ⚠️ 404 (Not Found)

=======
## 📌 Key Features

- **🚀 High Performance:** Static site generation (SSG) ensures blazing fast load times (95+ Google PageSpeed Score).
- **🔍 SEO Optimized:** 
  - Comprehensive meta tags (Title, Description, OG Tags).
  - **Structured Data (JSON-LD):** Integrated `School` schema for better search engine visibility.
  - **Sitemap:** Auto-generated `sitemap-index.xml`.
  - **Robots.txt:** Configured for proper indexing.
- **🎨 Modern Design:** Built with Tailwind CSS for a responsive, mobile-first UI.
- **📱 Responsive:** Fully functional across Desktops, Tablets, and Mobile devices.
- **⚙️ Configurable:** Site settings, menus, and social links are managed via JSON configuration files (`src/config/`).
- **📝 Content Management:** Content is managed via Markdown/MDX files in `src/content/`.

## 📂 Site Structure & Pages

The following pages are active and maintained:
>>>>>>> 10d726e2cd8b03f52d9635903a144d91de5821e5

- **🏠 Home:** (`/`) - Landing page with banner, key features, services, and testimonials.
- **👤 About Us:** (`/about`) - Information about the school's mission, vision, and gallery.
- **🌟 Amenities:** (`/features`) - Details about infrastructure and facilities.
- **📜 Mandatory Disclosures:** (`/mandatory-disclosures`) - Regulatory documents and certificates.
- **📞 Contact:** (`/contact`) - Contact details and inquiry form.
- **🚫 404:** Custom "Page Not Found" experience.

> **Note:** Unused templates (Pricing, Blog, Careers, Login/Signup) have been removed to keep the codebase clean and lightweight.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [React](https://reactjs.org/) (for interactive elements)
- **Content:** MDX & Markdown
- **Package Manager:** NPM / Yarn

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- NPM or Yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd BAS-School
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```
The output will be generated in the `dist/` directory, ready for deployment (e.g., Netlify, Vercel, or standard web hosting).

## 🐞 Project Maintenance

- **Configuration:** Update site metadata, social links, and menus in `src/config/`.
- **Content:** Update page text and images in `src/content/`.
- **Styling:** Global styles are in `src/styles/`.

## 📝 License

Developed and Maintained by [Think Unlimited](https://thinkunlimited.in).