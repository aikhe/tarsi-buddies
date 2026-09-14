import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Preview } from './Preview.tsx';

// verifies the app preview strip renders all three screens.
describe('Preview', () => {
  it('renders the three preview screens', () => {
    render(<Preview />);
    expect(
      screen.getByRole('img', {
        name: 'Tarsi Card screen showing account balance and premium upsell',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: 'Money Buddies screen inviting users to save with buddies',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: 'Avatar customization screen with outfits and accessories',
      })
    ).toBeInTheDocument();
  });
});
