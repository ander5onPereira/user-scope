import { render, screen } from '@testing-library/react';
import { QueryProvider } from './QueryContext';
import { describe, it, expect } from 'vitest';

describe('QueryProvider Context', () => {
  it('renders children correctly', () => {
    render(
      <QueryProvider>
        <div>Test Child</div>
      </QueryProvider>
    );
    const child = screen.getByText('Test Child');
    expect(child).toBeInTheDocument();
  });
});
