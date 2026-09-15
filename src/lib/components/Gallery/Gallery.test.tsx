import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Gallery } from './Gallery.tsx';

// verifies the gallery renders the seven phone screens.
describe('Gallery', () => {
  it('renders the seven screens once for assistive tech', () => {
    render(<Gallery />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(7);
    expect(images[0]?.getAttribute('src')).toMatch(/gallery\/1.*\.webp$/);
  });
});
