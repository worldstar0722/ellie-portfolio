# Ellie Choi — Portfolio

Single-page portfolio for Ellie (Gaeun) Choi — Information Systems student at the University of Utah (Dec 2026), minors in Business Analytics and Urban Ecology & Planning.

Built with React + Vite + Tailwind CSS. Deployable to Vercel out of the box.

**Updating content?** See **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** — a non-developer guide to editing text, images, experience entries, projects, and PDFs, with copy-paste templates.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (dist/)
npm run preview  # preview the production build
```

## Structure

- `src/data/translations.js` — all UI copy, English/Korean key pairs
- `src/data/projects.js` — the four case studies (homepage cards + `/work/<slug>` pages)
- `src/data/skills.js` — skills grid entries and icon/badge mapping
- `src/components/` — data-driven section components; no hardcoded copy
- `public/images/` — served images (labeled placeholder blocks render if a file is missing)
- `public/resume.pdf`, `public/academic-cv.pdf` — documents linked across the site
- `assets-src/` — raw source assets that are kept in the repo but never served

## Language toggle

EN / KO toggle in the nav; selection persists in `localStorage`. No i18n library — a plain translations object plus React state.

## Deploying to Vercel

Import the repo in Vercel; the defaults work (framework: Vite, build: `npm run build`, output: `dist`). `vercel.json` includes an SPA rewrite.
