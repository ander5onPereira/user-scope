import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/i18n';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
