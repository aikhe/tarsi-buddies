import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteHeader } from './SiteHeader.tsx';

// verifies the page header renders the brand logo and download action.
describe('SiteHeader', () => {
  it('renders the logo on the left', () => {
    render(<SiteHeader />);
    const logo = screen.getByRole('img', { name: 'Tarsi Buddies logo' });
    expect(logo).toBeInTheDocument();
    // small enough that vite inlines it as a data uri instead of a file path.
    expect(logo.getAttribute('src')).toMatch(/svg/);
  });

  it('renders the white download action on the right', () => {
    render(<SiteHeader />);
    expect(
      screen.getByRole('button', { name: /download the app/i })
    ).toBeInTheDocument();
  });
});
