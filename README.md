# Ellie Choi — Portfolio

Single-page portfolio for Ellie (Gaeun) Choi — Information Systems student at the University of Utah (Dec 2026), minors in Business Analytics and Urban Ecology & Planning.

Built with React + Vite + Tailwind CSS. Deployable to Vercel out of the box.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (dist/)
npm run preview  # preview the production build
```

## Structure

- `src/data/translations.js` — all UI copy, English/Korean key pairs
- `src/data/projects.js` — case study content (Problem → Approach → Result)
- `src/components/` — data-driven section components; no hardcoded copy
- `public/images/` — project images (gray placeholder blocks render if missing)
- `public/resume.pdf` — resume linked from the hero (placeholder for now)

## Language toggle

EN / KO toggle in the nav; selection persists in `localStorage`. No i18n library — a plain translations object plus React state.

## Deploying to Vercel

Import the repo in Vercel; the defaults work (framework: Vite, build: `npm run build`, output: `dist`). `vercel.json` includes an SPA rewrite.
