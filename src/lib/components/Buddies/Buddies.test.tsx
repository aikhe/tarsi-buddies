import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Buddies } from './Buddies.tsx';

// verifies the buddies section renders the group illustration on its band.
describe('Buddies', () => {
  it('renders the buddies illustration', () => {
    render(<Buddies />);
    const image = screen.getByRole('img', { name: /buddies/i });
    expect(image.getAttribute('src')).toMatch(/group\.svg$/);
  });

  it('wraps the illustration in a full-width stage with no subtitle', () => {
    render(<Buddies />);
    const image = screen.getByRole('img', { name: /buddies/i });
    expect(image.closest('.buddies__stage')).not.toBeNull();
    expect(screen.queryByText(/team up/i)).toBeNull();
  });

  it('renders children beside the stage in the duo row', () => {
    render(
      <Buddies>
        <div data-testid="duo-child" />
      </Buddies>
    );
    const child = screen.getByTestId('duo-child');
    expect(child.closest('.buddies__row')).not.toBeNull();
    expect(child.closest('.buddies__stage')).toBeNull();
  });
});
