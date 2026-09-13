---
name: design
description: Guides the implementation of clean, token-driven React UI. Use when styling components, mapping BEM classes, or adding motion.
---

# Design Skill

This skill ensures that all UI implementations adhere to the project's design-token system and technical standards.

## When to use this skill

- Use this when building new React components that require styling.
- Use this when adding transitions or micro-interactions.
- Use this when mapping CSS classes to the BEM (Block Element Modifier) convention.

## How to use it

### 1. Style Awareness

Always refer to the existing design system in `src/styles`:

- **Colors (`base/_colors.scss`)**: Use `var(--color-bg)`, `var(--color-text)`, and `var(--color-primary)`. Use `--color-overlay-xx` for depth.
- **Typography (`base/_typography.scss`)**: Light weights with 0.34% tracking for main text. Use `font--mono-label` for monospace labels.
- **Layout (`layout/_containers.scss`)**: Wrap page and section content in `.section-container` (max-width 1920px).
- **Buttons (`utilities/_buttons.scss`)**: Use `.ui-button` primitives (`--ghost` modifier for quiet actions).

### 2. BEM Mapping

- Always structure classes as `block`, `block__element`, and `block--modifier`.
- Keep component SCSS next to the component (e.g. `Home/Home.scss`).
- Avoid deeply nested selectors; rely on specific BEM classes for scoping.

### 3. Animation Guidelines

- Use CSS transitions for simple state changes (hover, expand, theme).
- Avoid instant visual snaps where motion aids clarity.
- Only add a motion library when CSS cannot express the interaction.

## Examples

```tsx
// Good: BEM + Tokens + Layout
export function Home() {
  return (
    <section className="home section-container">
      <h1 className="home__title">Tarsi Buddies!</h1>
    </section>
  );
}
```

```scss
.home__title {
  color: var(--color-text);
  font-weight: 200;
  letter-spacing: 0.34%;
}
```

## Anti-patterns

- Hardcoding hex codes (e.g., `#ffffff`) instead of using CSS variables.
- Using plain browser defaults or generic colors.
- Utility-class soup instead of BEM + design token SCSS variables.
