---
trigger: model_decision
description: Established rules for technical one-line commits and structured PR documentation. Apply this rule when staging changes, creating commits, or preparing pull requests.
---

# Git Policy

Established rules for technical one-line commits, PowerShell usage, and structured PR documentation. Apply this rule when staging changes, creating commits, or preparing pull requests.

## Intent

Maintain a clean, technical, and descriptive commit/PR history following a strict one-line and structured format, enforced by automated tooling.

## Rules

- MUST ONLY commit when explicitly instructed by the USER.
- MUST include `.agents/` changes in the commit when agent files were added or updated as part of the work.
- MUST use a single-line commit message format (enforced by Commitlint).
- MUST NOT include "Summary:" or any multi-line descriptions in commits.
- MUST use `+` to connect distinct features/changes.
- MUST use `&` to connect correlated details within a change.
- MUST wrap long messages immediately after a `+` or `&` (Max 120 chars).

## Automated Enforcement

- **Remote**: GitHub Actions validates PR titles and runs the CI pipeline (`check`, `test`, `build`).
- **CI**: Commitlint validates commit messages.

## Pull Request Style

- When requested, provide PR content as markdown that can be copied/pasted.
- PR Titles MUST follow the commit style (one-line, technical).
- PR Descriptions MUST include:
  - `### Summary`: High-level overview.
  - `### Features`: Bulleted list of new functionality.
  - `### Changes`: Technical breakdown of changes.
  - `### Verification`: Validation steps and results (lint, typecheck, build, review comments addressed).
  - `### Configuration`: (If applicable) code snippets for setup.
  - `### Environment`: Agent attribution with exact LLM model and version plus harness (e.g. `Model: Muse Spark 1.3`, `Harness: OpenCode`).

## Guidelines

- Make commit messages technical and descriptive.
- Prefer `feat(scope):`, `fix(scope):`, etc.
- Use lowercase for simple, direct descriptions.
- Use PowerShell for all Git operations.

## Samples

- `feat(home): placeholder title & bem styles + add pagelayout component`
- `fix(build): resolve vercel spa fallback & tighten stylelint css rules`

### PR Description Example

```markdown
### Summary

Adds the homepage placeholder with BEM styles and a shared page layout,
wiring the design-token entrypoint for future sections.

### Features

- **Homepage placeholder**: `Home` component rendering "Tarsi Buddies!".
- **Shared layout**: `PageLayout` wrapper using `.section-container`.
- **Token entrypoint**: `main.css` importing tailwind + color/type tokens.

### Changes

- **Homepage**: `src/lib/components/Home/` component, css, test
- **Layout**: `src/lib/layouts/PageLayout` component + css
- **Styles**: `src/styles/main.css` + `base/`, `layout/`, `utilities/`
- **Deploy**: `vercel.json` SPA fallback to `/index.html`

### Verification

- `bun run check` passes (prettier + eslint + stylelint).
- `bun run test` passes (Home renders placeholder title).
- `bun run build` succeeds (`tsc -b` + vite build to `dist/`).

### Environment

- Model: Muse Spark 1.3
- Harness: OpenCode
```

## Anti-patterns

- Committing without explicit "go ahead" from the USER.
- Using multi-line commit messages with summaries.
- Merging PRs with failing CI checks (Red ❌).
- Leaving `.agents/` updates uncommitted when they are part of the change.
