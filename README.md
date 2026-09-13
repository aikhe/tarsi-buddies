# Tarsi Buddies

Vite + React + TypeScript starter styled like `ego-ipse`, ready to deploy on Vercel.

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
.
├── src/
│   ├── App.tsx / main.tsx
│   ├── lib/
│   │   ├── assets/      # fonts, images, svgs
│   │   ├── components/  # feature-based components (Home/, ...)
│   │   ├── data/        # content models
│   │   ├── layouts/     # page-level layout components
│   │   ├── state/       # react context state
│   │   ├── types/       # typescript type definitions
│   │   └── utils/       # utility functions
│   └── styles/          # design tokens — base/, layout/, utilities/
├── .agents/             # agent rules, skills, workflows
├── .github/workflows/   # ci: check + test + build, commitlint
└── AGENTS.md            # agent entrypoint
```

See `AGENTS.md` for the agent load order and repo expectations.
