import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScreenBlock } from './ScreenBlock.tsx';

// verifies the block screen shows the hero ufo art above the title.
describe('ScreenBlock', () => {
  it('renders the ufo visual', () => {
    render(<ScreenBlock />);
    expect(screen.getByRole('img', { name: 'UFO' })).toHaveAttribute(
      'src',
      '/ufo.svg'
    );
  });

  it('renders the floating tarsi on top of the ufo', () => {
    render(<ScreenBlock />);
    expect(screen.getByRole('img', { name: 'Floating Tarsi' })).toHaveAttribute(
      'src',
      '/tarsi-float.svg'
    );
  });

  it('renders the title below the ufo', () => {
    render(<ScreenBlock />);
    expect(screen.getByRole('img', { name: 'Tarsi Buddies' })).toHaveAttribute(
      'src',
      '/title.svg'
    );
  });

  it('renders the desktop-only notice', () => {
    render(<ScreenBlock />);
    expect(
      screen.getByText(/only available on desktop screens/i)
    ).toBeInTheDocument();
  });
});
