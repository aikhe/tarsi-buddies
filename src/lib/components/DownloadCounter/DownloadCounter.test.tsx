import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DownloadCounter } from './DownloadCounter.tsx';

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  vi.useRealTimers();
});

// verifies the fixed bottom-right download badge.
describe('DownloadCounter', () => {
  it('renders the initial formatted total', () => {
    render(<DownloadCounter initialCount={12345} intervalMs={0} />);
    expect(
      screen.getByText('12,345 Buddies and counting!')
    ).toBeInTheDocument();
  });

  it('ticks upward on an interval like a server push', () => {
    vi.useFakeTimers();
    render(
      <DownloadCounter
        initialCount={12345}
        intervalMs={1000}
        maxIncrement={2}
        minIncrement={2}
      />
    );
    expect(
      screen.getByText('12,345 Buddies and counting!')
    ).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(
      screen.getByText('12,347 Buddies and counting!')
    ).toBeInTheDocument();
  });

  it('continues from the stored total on revisit', () => {
    vi.useFakeTimers();
    const { unmount } = render(
      <DownloadCounter
        initialCount={12345}
        intervalMs={1000}
        maxIncrement={2}
        minIncrement={2}
      />
    );
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(
      screen.getByText('12,347 Buddies and counting!')
    ).toBeInTheDocument();
    unmount();
    render(<DownloadCounter initialCount={12345} intervalMs={0} />);
    expect(
      screen.getByText('12,347 Buddies and counting!')
    ).toBeInTheDocument();
  });

  it('exposes a polite live region', () => {
    render(<DownloadCounter initialCount={12345} intervalMs={0} />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
  });
});
