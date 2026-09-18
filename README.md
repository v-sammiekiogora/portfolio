# Sammy Mati — Personal website

An editorial personal site for Sammy Mati, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Current-focus content is intentionally kept separate from the page layouts:

- `src/data/now.ts` — current work, learning, exploration, and life outside work

Shared UI lives in `src/components`, and route-level composition lives in `src/app`.

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```
