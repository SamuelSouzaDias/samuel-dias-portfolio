# Samuel Dias — Portfolio

Professional portfolio for Samuel Dias, a data professional transitioning from Business Intelligence into Analytics Engineering / Data Engineering.

Live site: [samuel-dias-portfolio.vercel.app](https://samuel-dias-portfolio.vercel.app)

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)
- [Vercel Analytics](https://vercel.com/analytics)

No CMS, database, or backend service — all content (experience, projects, skills, certifications) lives in typed data files under `src/data/`. Adding a new project is a matter of adding one object to `src/data/projects.ts`; no component changes required.

## Features

- Statically generated pages for fast load times and clean SEO (per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`)
- Dynamic project case-study pages generated from `src/data/projects.ts` via `generateStaticParams`
- Dark navy / gold design system, fully responsive from mobile (390px) through desktop (1920px)
- Accessible: semantic HTML, visible focus states, keyboard navigation, contrast-checked gold/blue accents on the dark background
- No skill percentage bars — skills are shown as plain categorized lists
- Structured to support a future PT translation (EN is the only shipped locale for now)

## Folder Structure

```
src/
├── app/                    Routes (App Router): home, about, experience,
│                            projects (list + [slug] detail), skills,
│                            certifications, contact, sitemap, robots
├── components/              Nav, Footer, Hero, ProjectCard, TimelineItem,
│                            MetricCounter
├── data/                    Typed content: experience.ts, projects.ts,
│                            skills.ts, certifications.ts, site.ts
└── styles/ (globals.css)    Design tokens (colors, fonts) via Tailwind's
                             CSS-first @theme configuration
public/
├── images/                  samuel-photo.jpg goes here (not yet added —
│                            the site currently shows a labeled placeholder)
├── icons/
└── resume/                  samuel-dias-resume-complete.pdf (primary) and
                             samuel-dias-resume-short.pdf (secondary) go here
```

## Pending Assets

A few assets referenced by the build spec haven't been supplied yet and need to be dropped in before those parts of the site are fully live:

- `public/images/samuel-photo.jpg` — headshot. Until added, the Hero and About sections show a labeled "Photo coming soon" placeholder.
- `public/resume/samuel-dias-resume-complete.pdf` — primary resume download (linked from the nav CTA, hero, and contact page).
- `public/resume/samuel-dias-resume-short.pdf` — secondary, condensed resume download.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint

## Deployment

1. Push to GitHub
2. Import the repository into Vercel as a Next.js project (build settings are auto-detected)
3. Deploy — the free `*.vercel.app` domain is used for v1; a custom domain can be attached later without any rebuild
