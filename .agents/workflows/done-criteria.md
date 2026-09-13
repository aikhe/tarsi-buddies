---
description: Quality checklist to verify BEM compliance, design tokens, and code cleanliness before task finalization.
---

# Done Criteria Workflow

**Description**: Quality checklist to verify BEM compliance, design-token usage, and code cleanliness before task finalization.

## Steps

1. **Rule Validation**:
   - Check that all custom CSS follows the **BEM** convention.
   - Verify colors and type come from design tokens (`_colors.css`, `_typography.css`), not hardcoded values.
   - Ensure new UI respects both light and dark `data-theme` overrides where applicable.
   - Ensure shared state lives in `src/lib/state/` context, not ad-hoc globals.
2. **Technical Polish**:
   - Run `bun run check` to ensure prettier + eslint + stylelint pass.
   - Run `bun run test` to ensure all tests pass.
   - Confirm that no hex codes or literal values are hardcoded (use design tokens).
   - Ensure list renders have `key` props.
3. **Cleanup**:
   - Remove placeholder images or generic "red/blue" colors.
   - Delete any temporary console logs or commented-out code blocks.
4. **Final Review**:
   - Confirm the solution is KISS and DRY before proceeding to commit-convention.
   - Run `bun run build` to verify typecheck (`tsc -b`) and production build succeed.
