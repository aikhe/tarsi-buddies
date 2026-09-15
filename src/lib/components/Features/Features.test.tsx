import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Features } from './Features.tsx';

// verifies the features section renders all four cards.
describe('Features', () => {
  it('renders the four feature cards', () => {
    render(<Features />);
    expect(
      screen
        .getByRole('img', {
          name: /home dashboard greeting lumi/i,
        })
        .getAttribute('src')
    ).toMatch(/features\/1.*\.webp$/);
    expect(
      screen.getByRole('img', { name: /assets overview/i }).getAttribute('src')
    ).toMatch(/features\/2.*\.webp$/);
    expect(
      screen
        .getByRole('img', {
          name: /upcoming bills and payments due/i,
        })
        .getAttribute('src')
    ).toMatch(/features\/3.*\.webp$/);
    expect(
      screen.getByRole('img', { name: /t-wallet card/i }).getAttribute('src')
    ).toMatch(/features\/4.*\.webp$/);
  });
});
