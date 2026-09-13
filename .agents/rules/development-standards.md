---
trigger: always_on
---

# Development Standards

## Intent

Maintain a clean, fast, and consistent coding standard that prioritizes readability, type safety, and visual consistency.

## Personality

- **Technical & Direct**: Use precise technical language. Avoid fluff.
- **Simple & Consistent**: Follow KISS (Keep It Simple, Stupid) and DRY (Don't Repeat Yourself).
- **Efficient**: Small focused components, minimal dependencies.

## Decision Making

- MUST prioritize simplicity and correctness in every change.
- MUST favor modularity over monolithic blocks of code.
- MUST solve the root cause rather than applying "hacky" fixes.
- MUST NOT make assumptions about user intent; ask for clarification.

## Architecture Standards

- MUST follow the feature-based isolation principle (feature subdirectories under `lib/components/`).
- MUST isolate business logic/state from UI components.
- MUST use React context in `src/lib/state/` for shared state.
- MUST keep content models in `src/lib/data/` with matching TypeScript types.

## Rules

- MUST use React 19 function components with TypeScript (no class components).
- MUST use BEM naming convention for all custom CSS/SCSS; Tailwind utilities are configured but the project styles with hand-written BEM classes.
- MUST remove unnecessary code on sight.
- MUST add `key` props to all list renders.
- MUST resolve all typecheck diagnostics (`bun run build` runs `tsc -b`).
- MUST use lowercase for comments.

## Linting & Formatting

- **ESLint**:
  - MUST NOT use `any` types (`@typescript-eslint/no-explicit-any`: error).
  - MUST NOT use undeclared variables (`no-undef`: error).
  - MUST follow `react-hooks` recommended rules.
  - MUST only export components from component files (`react-refresh/only-export-components`: warn).
- **Stylelint**:
  - MUST follow BEM for class and ID patterns.
  - MUST maintain alphabetical order for CSS properties (`order/properties-alphabetical-order`: true).
  - MUST use string notation for imports.
- **TypeScript**:
  - MUST enable `strict` mode logic.
  - MUST use `noUncheckedIndexedAccess` for safer array/object indexing.

## Guidelines

- Font: system/Geist-style stack at light weights with tight letter-spacing (see `_typography.scss`).
- Animation: CSS transitions for simple state changes; reach for a motion library only when justified.
- Colors: Use variables from `_colors.scss` only.
- Styling: BEM SCSS files next to components + shared tokens in `src/styles/`; Tailwind v4 is imported as a CSS foundation layer (`@import 'tailwindcss'` in `main.scss`) but utility classes are used sparingly.
- State: React context + hooks (`src/lib/state/`); no global singletons without boundaries.
- Deploy: Vercel static build (`bun run build` → `dist`, SPA fallback in `vercel.json`).

## Anti-patterns

- Bloated logic or repetitive code blocks.
- Shared global state without clear boundaries.
- Hardcoding hex colors or pixel values that should be variables.
- Class components or untyped props.
- Relying on Tailwind utility classes instead of BEM + design token SCSS variables.
