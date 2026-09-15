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

  it('renders the tagline below the title', () => {
    render(<Home />);
    expect(
      screen.getByText(/make every peso work smarter for you/i)
    ).toBeInTheDocument();
  });

  it('renders the ufo visual on the right', () => {
    render(<Home />);
    const ufo = screen.getByRole('img', { name: 'UFO' });
    expect(ufo).toBeInTheDocument();
    expect(ufo).toHaveAttribute('src', '/ufo.svg');
  });

  it('renders the floating tarsi on top of the ufo', () => {
    render(<Home />);
    const tarsi = screen.getByRole('img', { name: 'Floating Tarsi' });
    expect(tarsi).toBeInTheDocument();
    expect(tarsi).toHaveAttribute('src', '/tarsi-float.svg');
  });

  it('renders the number one graphic under the tagline', () => {
    render(<Home />);
    const badge = screen.getByRole('img', { name: 'Number one' });
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('src', '/number-one.svg');
  });

  it('renders the app store and browser actions', () => {
    render(<Home />);
    expect(
      screen.getByRole('button', { name: /download on the app store/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /open in the browser/i })
    ).toBeInTheDocument();
  });
});
