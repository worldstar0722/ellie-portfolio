# Content Guide

How to update the text, images, and documents on this portfolio **without touching any real code**. Almost everything you'll ever want to change lives in two files: `src/data/translations.js` (all sentences and labels, in English and Korean) and `src/data/projects.js` (the four case studies).

> **The golden rule:** every piece of text exists **twice** — once under `en:` and once under `ko:`. When you edit or add something, do it in **both** places, or the language toggle will show mismatched content.

---

## 1. Quick Reference Table

| What I want to change | File | Where inside the file |
| --- | --- | --- |
| Hero headline, tagline, intro sentence | `src/data/translations.js` | `hero:` block (in `en:` and `ko:`) |
| Navigation labels (WORK, SKILLS…) | `src/data/translations.js` | `nav:` block |
| Experience entries (the 5 cards) | `src/data/translations.js` | `experience.featured` array |
| Earlier Experience (collapsed list) | `src/data/translations.js` | `experience.earlier` array |
| Featured Case Studies (homepage cards + full case study pages) | `src/data/projects.js` | the `projects` array — one big object per project |
| Research context (the "Research Context" box on case study pages) | `src/data/projects.js` | `researchContext:` inside a project's `en:` / `ko:` |
| Skills (names, icons, capability lines) | `src/data/skills.js` **and** `src/data/translations.js` | see [Section 4D](#d-skills) — a skill lives in two files |
| Analytics Approach (5 steps) | `src/data/translations.js` | `approach.steps` array |
| Journey map city stories | `src/data/translations.js` | `journey.stops` array |
| Identity section (the mark, palette, story) | `src/data/translations.js` | `identity:` block |
| Contact / footer text and links | `src/data/translations.js` (labels) + `src/components/Footer.jsx` (the actual URLs) | `contact:` block / `links` array at the top of Footer.jsx |
| Resume PDF | `public/resume.pdf` | replace the file, keep the same name |
| Academic CV PDF | `public/academic-cv.pdf` | replace the file, keep the same name |
| Project images (dashboards, maps, charts) | `public/images/` | add files with the exact names listed in `projects.js` (e.g. `project01_dashboard.jpg`) |
| Portrait photo | `public/images/ellie-portrait.webp` + `.jpg` | replace both files, keep the same names |
| Original / source photos (not shown on site) | `assets-src/` | e.g. `assets-src/ellie-portrait-original.jpg` |
| Your LinkedIn / Calendly / email / GitHub URLs | `src/components/Hero.jsx`, `Nav.jsx`, `Footer.jsx`, `Experience.jsx` | search the file for the old URL and replace it |

---

## 2. Local Workflow (step by step)

You only need to do steps 1–3 **once**. After that, your routine is steps 4–9.

1. **Install the tools (once):** [GitHub Desktop](https://desktop.github.com/), [VS Code](https://code.visualstudio.com/), and [Node.js](https://nodejs.org/) (LTS version).
2. **Clone the repo (once):** in GitHub Desktop → *File → Clone Repository* → pick `worldstar0722/ellie-portfolio` → choose a folder on your computer.
3. **Install dependencies (once):** open the folder in VS Code (*File → Open Folder*), open the built-in terminal (*Terminal → New Terminal*), type `npm install` and press Enter. Wait for it to finish.
4. **Pull latest before every editing session:** in GitHub Desktop, click **Fetch origin**, then **Pull origin** if it offers. This matters because changes are sometimes pushed from other tools — editing an old copy creates conflicts.
5. **Start the live preview:** in the VS Code terminal, run `npm run dev`. It prints a local address like `http://localhost:5173` — open it in your browser.
6. **Edit** the files listed in the table above. The browser preview updates by itself every time you save (`Cmd/Ctrl + S`).
7. **Check both languages** with the EN / KO toggle in the top-right of the preview, and narrow the browser window to check mobile.
8. **Commit and push:** in GitHub Desktop you'll see your changed files. Write a short summary (e.g. "Update experience dates"), click **Commit to main**, then **Push origin**.
9. **Done — Vercel deploys automatically.** Pushing to `main` triggers a deploy; the live site updates in about a minute. No extra steps.

If the preview ever shows a full-screen error after an edit, you most likely broke the punctuation in a data file (a missing comma, quote, or brace). Undo (`Cmd/Ctrl + Z`) until the error disappears, then redo the edit carefully.

---

## 3. File Map

| File / folder | Controls |
| --- | --- |
| `src/data/translations.js` | **Every sentence and label on the site**, in two mirrored halves: `en: { … }` and `ko: { … }`. Blocks inside: `nav`, `hero`, `work` (labels only), `approach`, `skills` (names + capability lines), `experience`, `journey`, `identity`, `contact`, `caseStudy` (labels only). |
| `src/data/projects.js` | The 4 case studies: homepage card content **and** the full `/work/<slug>` pages (overview, problem, data, method, results, impact, gallery, reflection, research context). |
| `src/data/skills.js` | Which skills appear in the Skills grid, in what order, and which icon or text badge each one uses. |
| `src/data/journey.js` | Map coordinates and zoom levels for the 4 journey cities (you'll rarely touch this). |
| `public/resume.pdf` | The file behind every "Resume" link. Replace it; don't rename it. |
| `public/academic-cv.pdf` | The file behind every "Academic CV" link. Replace it; don't rename it. |
| `public/images/` | All images the site shows: the portrait (`ellie-portrait.webp` + `.jpg`) and, in future, project images named after the placeholders (e.g. `project01_dashboard.jpg`). |
| `assets-src/` | Storage for original, unprocessed files (like the raw studio photo). Nothing here appears on the site. |
| `src/components/*.jsx` | The layout code. You normally don't edit these — **except** to change a hardcoded URL (LinkedIn, Calendly, email, GitHub) in `Hero.jsx`, `Nav.jsx`, `Footer.jsx`, or `Experience.jsx`. |

> **Array order = display order.** Anything that appears as a list on the site (experience cards, projects, skills, journey stops, approach steps) comes from an array — the things between `[` and `]`, each entry wrapped in `{ … }`. The first object in the array is the first thing on the page. Move an object higher in the array and it appears earlier on the website. That's the whole system.

---

## 4. Copy-Paste Templates

### A. Experience

**File:** `src/data/translations.js` → paste into the `experience.featured` array — once inside `en:` (around the top half of the file) and once inside `ko:` (bottom half). Same spot in both.

English version (this is the real shape of the current "Financial Operation Assistant" entry):

```js
{
  id: "YOUR_UNIQUE_ID_HERE", // short, lowercase, no spaces — e.g. "analyst-intern"
  title: "YOUR_ROLE_TITLE_HERE",
  org: "YOUR_COMPANY_NAME_HERE",
  meta: "Part-time · Salt Lake City, Utah", // type · location — or delete this line
  period: "May 2026 – Present", // date range only, no durations
  description:
    "YOUR_DESCRIPTION_HERE — one or two conservative sentences.",
  tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"], // 3–4 tags
},
```

Korean version (same `id`, translated text):

```js
{
  id: "YOUR_UNIQUE_ID_HERE", // must match the English entry's id
  title: "역할 이름",
  org: "회사/기관 이름",
  meta: "파트타임 · 솔트레이크시티, 유타",
  period: "2026년 5월 – 현재",
  description: "설명 — 한두 문장으로 간결하게.",
  tags: ["태그 1", "태그 2", "태그 3"],
},
```

Optional extras (copy from the "Teaching Assistant" or "Leadership & Student Support Roles" entries): a `courses: ["…"]` list, or a `nested: ["Role — dates", …]` list for grouped sub-roles.

- **Delete an entry:** remove the whole `{ … },` block in **both** `en` and `ko`.
- **Reorder:** cut a whole `{ … },` block and paste it higher/lower — in both languages, so the two lists stay in the same order.
- The collapsed "Earlier Experience" list works the same way in the `experience.earlier` array (shape: `id`, `title`, `org`, `period`, `description` — no tags).

### B. Research (Research Context on case study pages)

**File:** `src/data/projects.js`. Each research-backed project has a `researchContext:` block inside its `en:` and `ko:` sections. It renders as the "Research Context" box on that project's `/work/<slug>` page, right after the Overview — the connection is automatic; no linking needed.

English version (real shape from the Super Bowl project):

```js
researchContext: {
  paper: "YOUR_FULL_RESEARCH_PAPER_TITLE_HERE",
  credit: "First Author · Advisor: YOUR_ADVISOR_NAME_HERE",
  text: "YOUR_DESCRIPTION_HERE — two or three sentences on what the study tested and found.",
},
```

Korean version:

```js
researchContext: {
  paper: "논문 제목",
  credit: "제1저자 · 지도교수 이름",
  text: "연구가 무엇을 검증했고 무엇을 발견했는지 두세 문장으로.",
},
```

To give a project a Research Context box it doesn't have yet, also add `researchBacked: true,` near the top of that project's object (next to `slug:`) — that flag also adds the "Academic CV" link to that page.

### C. Featured Case Studies (projects)

**File:** `src/data/projects.js` → the `projects` array. One object = one homepage card **plus** one full page at `/work/<slug>`. The page and its address are created automatically from the `slug` — no other file needs touching.

Abbreviated real shape (the full objects in the file also contain `snapshot`, `overview`, `problem`, `data`, `methodSteps`, `findings`, `metrics`, `charts`, `impact`, `reflection`, and `gallery` — copy an entire existing project object and rewrite every text field):

```js
{
  slug: "your-project-name-here", // becomes the page address: /work/your-project-name-here
  number: "05",
  tools: ["YOUR_TOOL_1", "YOUR_TOOL_2", "YOUR_TOOL_3"],
  cover: { name: "project05_cover", hint: "cover image", ratio: "16:9" },
  links: { github: "https://github.com/worldstar0722" }, // or {} for none
  en: {
    title: "YOUR_PROJECT_TITLE_HERE",
    category: "RESEARCH · YOUR_CATEGORY_HERE", // small eyebrow above the title
    subtitle: "YOUR_ONE_LINE_SUMMARY_HERE.",
    role: "YOUR_ROLE_TITLE_HERE",
    // …
    proofPoints: [
      "YOUR_PROOF_POINT_1", // e.g. "64,230 tweets"
      "YOUR_PROOF_POINT_2",
      "YOUR_PROOF_POINT_3",
    ],
    // … copy the remaining fields from an existing project
  },
  ko: {
    title: "프로젝트 제목",
    category: "리서치 · 카테고리",
    subtitle: "한 줄 요약.",
    role: "역할",
    proofPoints: ["핵심 성과 1", "핵심 성과 2", "핵심 성과 3"],
    // … 나머지 필드도 기존 프로젝트에서 복사해 번역
  },
},
```

Image fields (`cover`, `charts`, `gallery`) each have a `name` — that name maps to a file you drop into `public/images/` later (see Section 6). Until the file exists, the site shows a tidy labeled placeholder, never a broken image.

### D. Skills

A skill lives in **two files** — both steps are required:

**Step 1 — `src/data/skills.js`:** add to the right group's `skills` array (groups: `data`, `ml`, `urban`, `design`). Real shape:

```js
{ id: "your_skill_id", name: "YOUR_SKILL_NAME_HERE", icon: "database" },
// or, if there's no suitable icon, use a short text badge instead:
{ id: "your_skill_id", name: "YOUR_SKILL_NAME_HERE", badge: "ABCD" },
```

Available `icon` values (already wired up in `src/components/Skills.jsx`): `python`, `database`, `barchart`, `grid`, `sklearn`, `tree`, `arcgis`, `mappin`, `users`, `buildings`, `figma`, `piechart`, `presentation`. Anything else: use `badge` with 2–5 characters.

**Step 2 — `src/data/translations.js`:** in `skills.groups.<same group>.items`, add a line keyed by the same `id` — once under `en:`, once under `ko:`:

```js
your_skill_id: { name: "YOUR_SKILL_NAME_HERE", desc: "YOUR_CAPABILITY_LINE_HERE" },
```

```js
your_skill_id: { name: "스킬 이름", desc: "능력 한 줄" },
```

The `desc` is the small capability line under the name (e.g. Python's is `"Data cleaning · modeling · analysis"`). **Reorder skills** by reordering the array in `skills.js` — that alone controls display order.

### E. Identity ("the mark / palette / story" section)

**File:** `src/data/translations.js` → the `identity:` block, in both `en:` and `ko:`. Real current shape:

```js
identity: {
  heading: "Identity",
  markLabel: "THE MARK",
  markStory: "YOUR_DESCRIPTION_HERE — the story of the E-bar logo.",
  paletteLabel: "THE PALETTE",
  colors: [
    { name: "Ledger navy", hex: "#1B3A5C" },
    { name: "Cinema ink", hex: "#23272F" },
    { name: "Field paper", hex: "#F7F4EE" },
    { name: "Canyon clay", hex: "#C05B3C" },
    { name: "Maehwa blush", hex: "#E4A3B4" },
  ],
  storyLabel: "THE STORY",
  story: "YOUR_DESCRIPTION_HERE — the one-paragraph palette story.",
},
```

Safe to edit: any of the text strings, and the color `name`s. The `hex` values change the swatch colors shown in this section only — the site's actual theme colors live in `tailwind.config.js` (leave that alone unless you're rebranding). The logo itself is drawn in `src/components/Logo.jsx`.

---

## 5. How to Delete and Reorder Entries

Every list on the site is an array: entries between `[` and `]`, each one an object wrapped in `{ … }` and separated by commas.

**Deleting:** select from the entry's opening `{` to its closing `},` (including that trailing comma) and delete. The remaining entries must still be separated by single commas — no doubled commas, no comma left dangling before the closing `]` is fine (trailing commas are allowed in this project).

**Reordering:** cut the whole `{ … },` block and paste it at a different position in the same array. Array order controls display order — first in the array, first on the page.

Small example — moving the Teaching Assistant card above the Finance card:

```js
featured: [
  { id: "ta",      title: "Teaching Assistant", … },        // ← moved up: now shows first
  { id: "finance", title: "Financial Operation Assistant", … },
  …
],
```

Remember to make the same move in **both** the `en` and `ko` halves so the two languages stay in sync.

---

## 6. How to Add or Replace Images

**Where files go**

- `public/images/` — everything the site actually displays.
- `assets-src/` — original/raw versions you want to keep but not publish (e.g. `assets-src/ellie-portrait-original.jpg`, the unedited studio photo). Nothing in this folder is served.

**Naming rules:** lowercase, no spaces, hyphens or underscores only — e.g. `project01_dashboard.jpg`, `ellie-portrait.webp`. The name is the connection: components and project data refer to images *by exact filename*.

**Formats:** `.webp` for the smallest files (best), `.jpg` for photos and as a fallback, `.png` only for screenshots that need pixel-perfect text. Keep images around 1000–1600px on the long edge — phone-camera originals are 10× bigger than needed.

**Replacing an existing image — no code changes needed.** Overwrite the file in `public/images/` with a new one **of exactly the same name**. Example: to update the portrait, replace both `public/images/ellie-portrait.webp` and `public/images/ellie-portrait.jpg` (keep it 4:5, about 800×1000).

**Filling a project placeholder — also no code changes.** Every gray "Upload later" box on the site is named. Save your image as `public/images/<that name>.jpg` and it appears automatically. Current expected names include:

- Project 01: `project01_cover`, `project01_dashboard`, `project01_sentiment_distribution`, `project01_brand_ranking_chart`, `project01_winning_score_model_diagram`, `project01_ad_meter_comparison`
- Project 02: `project02_cover`, `project02_model_pipeline`, `project02_sentiment_over_time`, `project02_feature_importance`, `project02_model_comparison`, `project02_confusion_matrix`
- Project 03: `project03_cover`, `project03_site_map`, `project03_equity_analysis`, `project03_health_planning_framework`, `project03_recommendation_board`, `project03_before_after_concept`
- Project 04: `project04_cover`, `project04_arcgis_map`, `project04_transect_diagram`, `project04_field_photo_grid`, `project04_annotated_observation_map`, `project04_urban_pattern_diagram`

(All `.jpg` — e.g. `public/images/project01_dashboard.jpg`.)

**Referencing a brand-new image in a component** (rare — only for images outside the placeholder system). The real line the site uses for the portrait, in `src/components/Hero.jsx`, is:

```jsx
<img
  src="/images/ellie-portrait.jpg"
  alt="Ellie Choi portrait"
  ...
/>
```

To use a new image somewhere, copy that pattern with your filename and a short description of the image as `alt`:

```jsx
<img src="/images/YOUR_FILE_NAME_HERE.jpg" alt="YOUR_IMAGE_DESCRIPTION_HERE" />
```

Note the path starts with `/images/` — not `/public/images/` — because everything inside `public/` is served from the site root.

**Resume and Academic CV:** same replace-by-name idea — overwrite `public/resume.pdf` or `public/academic-cv.pdf` with the new PDF, keeping the exact filename. Every button on the site updates automatically.
