import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StoreActions } from './StoreActions.tsx';

// verifies the shared store buttons render both actions.
describe('StoreActions', () => {
  it('renders the app store and browser actions', () => {
    render(<StoreActions />);
    expect(
      screen.getByRole('button', { name: /download on the app store/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /open in the browser/i })
    ).toBeInTheDocument();
  });
});
