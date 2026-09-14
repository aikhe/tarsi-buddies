import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

// reset the dom between component tests.
afterEach(() => {
  cleanup();
});
