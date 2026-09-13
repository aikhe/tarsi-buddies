---
description: Automated process to run linting and resolve technical diagnostics like React hooks or TypeScript types.
---

# Format and Lint Workflow

**Description**: Automated process to run linting and resolve technical diagnostics like React hooks or TypeScript types.

## Steps

1. **Execute Formatting & Linting**:
   - Run `bun run format` from the repo root to auto-fix prettier + eslint + stylelint issues.
2. **Run Full Check**:
   - Run `bun run check` to verify prettier formatting + eslint + stylelint pass clean.
3. **Manual Resolution**:
   - Resolve any remaining `@typescript-eslint/no-explicit-any` errors.
   - Fix any `react-hooks` rule violations.
   - Fix type errors reported by `tsc -b` (runs as part of `bun run build`).
4. **Style Guarantee**:
   - Verify that `order/properties-alphabetical-order` is respected in all modified CSS files.
   - Ensure `selector-class-pattern` adheres to the BEM standard.
5. **Final Check**: Run `bun run check` to confirm zero diagnostics before finishing.
6. **CI Verification**: Ensure all changes pass the remote CI pipeline (CI runs `bun run check`, then `bun run test`, then `bun run build`).
