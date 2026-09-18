# Sammy Mati — Personal website

An editorial personal site for Sammy Mati, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

The primary content is intentionally kept separate from the page layouts:

- `src/data/projects.ts` — projects, experiments, and ideas
- `src/data/notes.ts` — notebook entries and future native-post slugs
- `src/data/now.ts` — current focus and the scrolling “Currently” list

Shared UI lives in `src/components`, and route-level composition lives in `src/app`.

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```
