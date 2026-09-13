---
description: Structured sequence to prepare and finalize Pull Request documentation, including summaries, feature lists, and clickable file changes.
---

# PR Workflow

**Description**: Structured sequence to prepare and finalize Pull Request documentation, including summaries, feature lists, and clickable file changes.

## Steps

1. **Pre-flight Check**: Run `bun run check`, `bun run test`, and `bun run build`, then review done-criteria to ensure the work is ready for production.
2. **Draft PR Metadata**:
   - **Title**: Use the technical one-line commit style.
   - **Summary**: Write a high-level overview (1-2 sentences) of the goal.
   - **Features**: List new capabilities in a bulleted list.
   - **Changes**: Provide a technical breakdown with clickable links to modified files.
3. **Configuration**: If the change requires new environment variables or Vercel setup, include a `### Configuration` block with the necessary code snippets.
4. **Environment**: Always append a `### Environment` block with the exact LLM model and version plus the harness (e.g. `Model: Muse Spark 1.3`, `Harness: OpenCode`). Never guess; write `Unknown` and confirm with the user if unsure.
5. **Final Review**: Ensure the PR markdown is clean, technical, and ready for copy-pasting by the user.
6. **Finalize**: Prompt the user to run `/commit-convention` to stage and commit the work before closing the PR.
