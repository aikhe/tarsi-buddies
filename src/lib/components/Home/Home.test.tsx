import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from './Home.tsx';

// verifies the homepage placeholder renders.
describe('Home', () => {
  it('renders the placeholder title', () => {
    render(<Home />);
    expect(screen.getByText('Tarsi Buddies!')).toBeInTheDocument();
  });
});
