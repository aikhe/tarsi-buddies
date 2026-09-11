import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from './Home.tsx';

// verifies the homepage title image renders.
describe('Home', () => {
  it('renders the title logo', () => {
    render(<Home />);
    const logo = screen.getByRole('img', { name: 'Tarsi Buddies' });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/title.svg');
  });
});
