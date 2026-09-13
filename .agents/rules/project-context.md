---
trigger: always_on
---

# Project Context

## The Why

**Tarsi Buddies** is a fresh Vite + React web project set up for fast iteration and Vercel deployment. It mirrors the structure and code style of the `ego-ipse` web app (feature-based components, BEM styling, design tokens, strict linting) without the monorepo/CMS/3D overhead.

## The System

- **App**: A Vite + React 19 + TypeScript SPA in `src/`. Deploys to Vercel as a static build.
- **Styling**: Tailwind v4 as foundation layer + hand-written BEM CSS using design tokens in `src/styles/`.
- **State**: React context in `src/lib/state/` for shared app state.
- **Content**: Local data models in `src/lib/data/` (no CMS).
- **Infrastructure**: Plain bun scripts (no Turborepo). Vercel builds `dist` via `bun run build`.
- **Testing**: Vitest with Testing Library + jsdom for unit and component tests.

## Decision Making Context

Every technical decision should keep the project small, fast, and easy to deploy. Prefer simple React patterns and design-token styling over new dependencies. If a change complicates the Vercel build or breaks the lint gates, it must be reconsidered.

## Awareness Rules

- MUST be aware that this is a single-app repo (no `apps/` or `packages/`).
- MUST keep styling on design tokens (`src/styles/base/_colors.css`, `_typography.css`).
- MUST maintain the BEM naming convention across all new UI.
- MUST keep the Vercel SPA fallback (`vercel.json` rewrites) working when touching routing or build output.
- MUST use React context in `src/lib/state/` for shared state (not ad-hoc globals).
