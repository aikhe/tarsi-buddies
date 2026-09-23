import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Rawr } from './Rawr.tsx';

// verifies the rawr sky renders the dino, meteor, and scattered clouds.
describe('Rawr', () => {
  it('renders the dino and meteor', () => {
    render(<Rawr />);
    expect(
      screen.getByRole('img', { name: /dino/i }).getAttribute('src')
    ).toMatch(/rawr\/dino\.svg$/);
    expect(
      screen.getByRole('img', { name: /meteor/i }).getAttribute('src')
    ).toMatch(/rawr\/meteor\.svg$/);
  });

  it('renders each lane of clouds once for assistive tech', () => {
    render(<Rawr />);
    const clouds = screen.getAllByRole('img', { name: /cloud variant/i });
    expect(clouds).toHaveLength(6);
  });
});
