import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Fall } from './Fall.tsx';

// verifies the finale renders the falling tarsi and actions.
describe('Fall', () => {
  it('renders the falling character', () => {
    render(<Fall />);
    expect(screen.getByRole('img', { name: /falling/i })).toHaveAttribute(
      'src',
      '/tarsi-fall.svg'
    );
  });

  it('renders the store actions under the character', () => {
    render(<Fall />);
    expect(
      screen.getByRole('button', { name: /download on the app store/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /open in the browser/i })
    ).toBeInTheDocument();
  });
});
