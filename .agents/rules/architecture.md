---
trigger: always_on
---

# Architecture

## Intent

Maintain a scalable and predictable single-app structure with feature-based isolation, mirroring the `ego-ipse` web app conventions.

## Tech Stack

- **Package Manager**: Bun
- **Frontend**: React 19 + TypeScript (Vite 8)
- **Styling**: Tailwind v4 foundation + hand-written BEM SCSS (sass)
- **State**: React context (`src/lib/state/`)
- **Content**: Local data models (`src/lib/data/`)
- **Testing**: Vitest + Testing Library + jsdom
- **Deploy**: Vercel (static `dist` build, SPA fallback via `vercel.json`)
- **Tooling**: ESLint, Stylelint, Prettier, TypeScript, Commitlint

## Project Tree

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
│   └── styles/          # design tokens (BEM/SCSS) — base/, layout/, utilities/
│       └── main.scss    # tailwind + token entrypoint
├── public/              # static vercel assets (favicon, robots.txt)
├── .agents/             # agent skills, rules, and workflows
├── .github/workflows/   # CI: check + test + build, commitlint
├── vite.config.ts       # vite + react + tailwind + vitest config
├── vercel.json          # SPA fallback rewrites
└── package.json         # dependencies and scripts
```

## Rules

- MUST follow the structure above.
- MUST use feature-based subdirectories within `lib/components/` for component grouping.
- MUST NOT import across feature groups directly; use a public API or bridge.
- MUST isolate business logic/state from the UI components.

## Guidelines

- Prefer modular and composable design.
- Keep shared logic in `lib/utils/` or `lib/state/` with clear boundaries.
- Use `lib/data/` for content-driven data and components for presentation.
- State management uses React context (`src/lib/state/`).

## Checks

- No circular dependencies between feature groups.
- Clear separation between UI and data/state logic.

## Anti-patterns

- Shared global state without boundaries.
- Logic inside components that should be in a context, hook, or utility.
- Hardcoding content that should live in `lib/data/`.
