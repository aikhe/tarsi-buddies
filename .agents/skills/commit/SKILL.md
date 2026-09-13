---
name: commit
description: Stage and commit changes with a one-line conventional message. Use when the user asks to commit, stage and commit, or save changes as a commit.
---

# Commit Changes

Stage and commit changes using the professional, structured Git commit message format.

## When to use this skill

- Use this when the user asks to commit, stage and commit, or save work as a commit.
- Use this when splitting recent changes into multiple dated or scoped commits.
- Do not use this for PR bodies or descriptions — use the `pr` skill instead.

## How to use it

Follow `.agents/rules/git-policy.md` and `.agents/workflows/commit-convention.md` as the source of truth; this skill is the execution checklist.

### 1. Check Git Status & Diffs

- Identify staged and unstaged changes (`git status`, `git diff`, `git diff --cached`).
- If nothing is staged, stage the relevant files or ask the user which to include.
- Include `.agents/` files when they were added or updated as part of the work.

### 2. Draft the Commit Message

- Format: `<type>(<scope>): <description 1> & <description 2> + <description 3>`.
- Use `+` for distinct changes, `&` for correlated details within one change.
- Single line only, max 120 chars, lowercase descriptions, no body or footer.
- Types: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, etc.

### 3. Execute the Commit

- Use PowerShell for all Git operations.
- Commit only after explicit user confirmation (`git commit -m "..."`).
- For backdated splits, set `GIT_AUTHOR_DATE` / `GIT_COMMITTER_DATE` plus `--date="YYYY-MM-DDTHH:MM:SS"` so author and committer dates agree.

## Examples

- `refactor(styles): compact typography classes & shared button primitives + migrate text styles`
- `feat(home): add placeholder section & wire pagelayout + add component test`
