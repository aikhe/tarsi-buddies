import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer.tsx';

// verifies the minimal footer row renders brand, links, and copyright.
describe('Footer', () => {
  it('renders the brand text on the left', () => {
    render(<Footer />);
    expect(
      screen.getByText('Tarsi Buddies', { selector: '.footer__brand' })
    ).toBeInTheDocument();
  });

  it('renders support, privacy, and terms links', () => {
    render(<Footer />);
    for (const name of ['Support', 'Privacy', 'Terms']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument();
    }
  });

  it('renders the copyright line', () => {
    render(<Footer />);
    expect(screen.getByText(/©.*tarsi buddies/i)).toBeInTheDocument();
  });
});
