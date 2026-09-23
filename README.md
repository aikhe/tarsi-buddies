<img width="1200" height="630" alt="Frame" src="https://github.com/user-attachments/assets/24c1814d-766d-4c7d-b290-8ef0568be172" />

# Tarsi Buddies

Site for the Tarsi Buddies app.

## Stack

<div>
  <img src="https://img.shields.io/badge/-bun-%23eeeeee?style=flat-square&logo=bun&logoColor=black" alt="bun" >
  <img src="https://img.shields.io/badge/-vite-%23eeeeee?style=flat-square&logo=vite&logoColor=black" alt="vite" >
  <img src="https://img.shields.io/badge/-react-%23eeeeee?style=flat-square&logo=react&logoColor=black" alt="react" >
  <img src="https://img.shields.io/badge/-typescript-%23eeeeee?style=flat-square&logo=typescript&logoColor=black" alt="typescript" >
  <img src="https://img.shields.io/badge/-tailwindcss-%23eeeeee?style=flat-square&logo=tailwindcss&logoColor=black" alt="tailwindcss" >
  <img src="https://img.shields.io/badge/-gsap-%23eeeeee?style=flat-square&logo=gsap&logoColor=black" alt="gsap" >
  <img src="https://img.shields.io/badge/-vitest-%23eeeeee?style=flat-square&logo=vitest&logoColor=black" alt="vitest" >
  <img src="https://img.shields.io/badge/-vercel-%23eeeeee?style=flat-square&logo=vercel&logoColor=black" alt="vercel" >
</div>

## Quickstart

```sh
bun install
bun run dev
```

## Scripts

| Script              | What it does                            |
| ------------------- | --------------------------------------- |
| `bun run dev`       | start the vite dev server               |
| `bun run build`     | typecheck (`tsc -b`) + production build |
| `bun run preview`   | preview the production build locally    |
| `bun run check`     | prettier check + eslint + stylelint     |
| `bun run lint`      | eslint + stylelint                      |
| `bun run format`    | auto-fix prettier + eslint + stylelint  |
| `bun run test`      | run vitest once                         |
| `bun run test:unit` | run vitest in watch mode                |

## Deploy to Vercel

- Framework preset: **Vite**.
- Build command: `bun run build` (auto-detected via `bun.lock`).
- Output directory: `dist`.
- `vercel.json` rewrites all routes to `/index.html` for SPA fallback.

## Structure

```text
src/
├── App.tsx / main.tsx
├── lib/
│   ├── assets/      # images grouped by component
│   ├── components/  # feature-based components (Home/, ...)
│   ├── layouts/     # page-level layout components
│   └── utils/       # utility functions
└── styles/          # globals — tokens.css, main.css
```
