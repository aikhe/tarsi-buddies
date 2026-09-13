---
trigger: model_decision
---

# UI System

Defines the project's UI/UX standards, typography, and tokens. Apply this rule when styling components, implementing animations, or reviewing the visual fidelity of the interface.

## Intent

Maintain a clean, consistent, and fast user interface built on design tokens and BEM SCSS.

## Rules

- MUST use the **BEM** (Block Element Modifier) naming convention for all custom CSS classes.
- MUST use CSS variables for all design tokens (colors, spacing, etc.).
- MUST use CSS transitions for simple state changes; avoid instant snaps where motion aids clarity.
- MUST prioritize consistency: shared tokens, shared button primitives, subtle micro-interactions.

## Guidelines

- **Typography**:
  - Main: system/Geist-style stack at light weights with tight letter spacing (0.34%).
  - Use `font--mono-label` class for monospace labels.
  - Use `font--hero-title` class for hero headings.
- **Colors**: Use the curated palette in `_colors.scss`.
  - Surface: `var(--color-bg)`, `var(--color-primary)`
  - Content: `var(--color-text)`, `var(--color-text-muted)`, `var(--color-text-inv)`
  - Overlays: `var(--color-overlay-xx)` (from 02 to 60) for depth.
- **Styling approach**: Tailwind v4 is configured as a CSS foundation (`@import 'tailwindcss'` in `main.scss`) but the project styles UI with hand-written BEM SCSS using design tokens from `_colors.scss`, `_typography.scss`, and `_containers.scss`. Component SCSS lives next to the component (e.g. `Home/Home.scss`).
- **Layout**:
  - Max Width: `1920px` (`--container-max-width`)
  - Standard Width: `96.4%` (`--container-width`)
  - Main container class: `.section-container`
- **Buttons**: Use `.ui-button` primitives from `utilities/_buttons.scss` (`--ghost` modifier for quiet actions).
- **Theme**: Light by default; dark overrides live under `:root[data-theme='dark']`. New UI MUST respect both.

## Anti-patterns

- Hardcoding hex codes instead of using established CSS variables.
- Using plain browser defaults or generic "red/blue" colors.
- Instant visibility toggles without transitional motion where it matters.
- Ignoring the `data-theme` logic for light/dark mode variations.
