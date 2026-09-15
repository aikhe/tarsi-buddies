import { useDownloadCount } from './use-download-count.ts';
import './DownloadCounter.css';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

type DownloadCounterProps = {
  initialCount?: number;
  intervalMs?: number;
  maxIncrement?: number;
  minIncrement?: number;
};

// keeps locale grouping stable across renders.
function formatCount(value: number): string {
  return value.toLocaleString('en-US');
}

// fixed bottom-right text with digits that roll upward as the total ticks up.
export function DownloadCounter({
  initialCount = 12345,
  intervalMs = 2600,
  maxIncrement = 7,
  minIncrement = 1,
}: DownloadCounterProps) {
  const count = useDownloadCount({
    initialCount,
    intervalMs,
    maxIncrement,
    minIncrement,
  });
  const formatted = formatCount(count);
  const characters = formatted.split('');

  return (
    <div aria-live="polite" className="download-counter" role="status">
      <span aria-hidden="true" className="download-counter__pulse" />
      <span aria-hidden="true" className="download-counter__number">
        {characters.map((character, index) =>
          character === ',' ? (
            <span className="download-counter__comma" key={`comma-${index}`}>
              ,
            </span>
          ) : (
            <span
              className="download-counter__digit"
              // index keys keep each reel mounted so transform transitions roll upward.
              key={`digit-${index}`}
            >
              <span
                className="download-counter__reel"
                style={{ transform: `translateY(-${character}em)` }}
              >
                {DIGITS.map(digit => (
                  <span className="download-counter__cell" key={digit}>
                    {digit}
                  </span>
                ))}
              </span>
            </span>
          )
        )}
      </span>
      <span aria-hidden="true" className="download-counter__label">
        Buddies and counting!
      </span>
      <span className="download-counter__sr-only">
        {formatted} Buddies and counting!
      </span>
    </div>
  );
}
