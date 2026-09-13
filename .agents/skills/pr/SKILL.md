---
name: pr
description: Create structured pull requests with verification and attribution. Use when the user asks to open, draft, update, or describe a pull request.
---

# PR Skill

Create pull requests with a structured description, verification steps, and agent attribution.

## When to use this skill

- Use this when the user asks to open, draft, update, or describe a pull request.
- Use this when turning a branch of commits into a review-ready PR via `gh`.
- Do not use this for local commits — use the `commit` skill instead.

## How to use it

Follow `.agents/rules/git-policy.md` and `.agents/workflows/pr-workflow.md` as the source of truth.

### 1. Check the branch

- Verify with `git status` and `git branch -a` that the branch is pushed to remote.

### 2. Draft the PR body as a markdown file

- Write the body to a `.md` temp file (e.g. `pr_body.md`). This avoids shell escaping issues with backticks and inline code when passing to `gh`.

### 3. Create or edit the PR using the file

- Create: `gh pr create --title "<title>" --body-file <path/to/pr_body.md>`
- Edit: `gh pr edit <number> --body-file <path/to/pr_body.md>`

### 4. PR Title

- Follows the conventional commit format (`<type>(<scope>): <description>`), single line, max 120 chars.

### 5. PR Description

MUST include these sections in order:

- `### Summary`: High-level overview.
- `### Features`: Bulleted list of new functionality.
- `### Changes`: Technical breakdown of changes (bullets or `| File | Change |` table).
- `### Verification`: Validation steps and results (e.g. lint, typecheck, build, review comments addressed).
- `### Configuration`: (If applicable) code snippets for setup.
- `### Environment`: Agent attribution. Always state the exact LLM model and version plus the harness, e.g.:
  `Model: Muse Spark 1.3` + `Harness: OpenCode`.
  Never omit this section; if the model or harness is unknown, write `Unknown` and ask the user to confirm rather than guessing.

## Review Comment Handling

When Copilot or other reviewers leave feedback on a PR:

- Evaluate each comment — address valid concerns (bugs, memory leaks, duplication) and acknowledge false positives.
- Push fixes as separate, focused commits (one concern per commit where practical).
- Post a summary comment on the PR listing what was addressed and how.
