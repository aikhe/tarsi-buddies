import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Cards } from './Cards.tsx';

// verifies the cards section renders all three designs.
describe('Cards', () => {
  it('renders the three card designs', () => {
    render(<Cards />);
    expect(
      screen
        .getByRole('img', { name: /card design in green/i })
        .getAttribute('src')
    ).toMatch(/cards\/1.*\.webp$/);
    expect(
      screen
        .getByRole('img', { name: /card design in dark/i })
        .getAttribute('src')
    ).toMatch(/cards\/2.*\.webp$/);
    expect(
      screen
        .getByRole('img', { name: /card design in light/i })
        .getAttribute('src')
    ).toMatch(/cards\/3.*\.webp$/);
  });
});
