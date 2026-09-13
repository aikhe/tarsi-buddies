---
name: tests
description: Generates and manages unit and component tests. Use when ensuring code quality or verifying user flows in React components.
---

# Tests Skill

This skill ensures that the application remains robust through consistent testing patterns.

## When to use this skill

- Use this when creating new features that require verification.
- Use this when debugging complex component interactions.
- Use this to generate mock data for testing UI states.

## How to use it

### 1. Component Testing

- Use Vitest + `@testing-library/react` with the jsdom environment for component tests.
- Test files live alongside components: `src/**/*.test.{ts,tsx}`.
- Focus on user-visible output and interactions (render, clicks, inputs).
- Global matchers come from `@testing-library/jest-dom` via `src/test-setup.ts`.

### 2. Unit Testing

- Plain `.{test,spec}.{ts,tsx}` files for utilities, hooks, state, and data logic.
- Follow the project's lowercase comment style within test files.
- Ensure all tests are kept simple and direct (DRY/KISS).

### 3. Standards

- One behavior per test, descriptive test names.
- Avoid testing implementation details (internal state, class names).

## Example Commands

```sh
bun run test          # run all tests once (ci)
bun run test:unit     # watch mode for development
```

## Example

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from './Home.tsx';

describe('Home', () => {
  it('renders the placeholder title', () => {
    render(<Home />);
    expect(screen.getByText('Tarsi Buddies!')).toBeInTheDocument();
  });
});
```
