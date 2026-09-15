import { useEffect, useState } from 'react';

export const DOWNLOAD_COUNT_STORAGE_KEY = 'tarsi-buddies:download-count';

type UseDownloadCountOptions = {
  initialCount?: number;
  intervalMs?: number;
  maxIncrement?: number;
  minIncrement?: number;
};

// returning visitors continue from the stored total instead of restarting.
function readStoredCount(fallback: number): number {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(DOWNLOAD_COUNT_STORAGE_KEY);
    if (raw === null) return fallback;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed < 0) return fallback;
    return Math.max(Math.floor(parsed), fallback);
  } catch {
    // storage is unavailable (private mode); fall back to the seed value.
    return fallback;
  }
}

// simulates a server-pushed download total by ticking upward on an interval.
export function useDownloadCount({
  initialCount = 12345,
  intervalMs = 2600,
  maxIncrement = 7,
  minIncrement = 1,
}: UseDownloadCountOptions = {}): number {
  const [count, setCount] = useState(() => readStoredCount(initialCount));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(DOWNLOAD_COUNT_STORAGE_KEY, String(count));
    } catch {
      // storage is unavailable (private mode); the counter still works in memory.
    }
  }, [count]);

  useEffect(() => {
    if (intervalMs <= 0) return;
    const low = Math.min(minIncrement, maxIncrement);
    const high = Math.max(minIncrement, maxIncrement);
    const id = window.setInterval(() => {
      const span = high - low + 1;
      const step = low + Math.floor(Math.random() * span);
      setCount(previous => previous + step);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, maxIncrement, minIncrement]);

  return count;
}
