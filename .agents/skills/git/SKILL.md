---
name: git
description: Manages the project's technical git workflow. Use when creating commits or formatting pull requests according to the project policy.
---

# Git Skill

This skill ensures that the commit history and PR documentation remain technical, clean, and descriptive.

## When to use this skill

- Use this before committing code to ensure the message follows the one-line format.
- Use this when generating PR summaries and descriptions.
- Use this to ensure `.agents/` updates are included when they are part of the change.

## How to use it

### 1. Commit Formatting

- Use the one-line format: `feat(scope): descriptions & details + second feature`.
- Connect distinct features with `+`.
- Connect correlated details with `&`.
- Wrap long messages immediately after a `+` or `&` (Max 120 chars).
- **Automated Validation**: Commit messages are enforced in CI by **Commitlint**.

### 2. Pull Request Style

- PR Titles must follow the commit style (one-line, technical).
- PR Descriptions MUST include:
  - `### Summary`: High-level overview.
  - `### Features`: Bulleted list of new functionality.
  - `### Changes`: Technical breakdown of changes.
  - `### Configuration`: (If applicable) code snippets for setup.
- **Automated Validation**: PR titles are enforced by **GitHub Actions**.
- **CI Enforcement**: Merging is only allowed if the **CI Pipeline** (check/test/build) is green.

### 3. Guidelines

- Use PowerShell for all Git operations.
- Prefer technical and descriptive language (`feat(home):`, `fix(build):`).
- Use lowercase for simple, direct descriptions.

## Anti-patterns

- Committing without explicit "go ahead" from the USER.
- Using multi-line commit messages with summaries.
- Leaving `.agents/` updates uncommitted when they are part of the change.

## Samples

- `feat(home): placeholder title & bem styles + add pagelayout component`
- `fix(build): resolve vercel spa fallback & tighten stylelint scss rules`
