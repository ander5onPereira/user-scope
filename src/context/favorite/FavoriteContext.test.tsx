import { render, screen } from '@testing-library/react';
import { FavoriteProvider } from './FavoriteContext';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('FavoriteProvider Context', () => {
  it('renders children correctly', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FavoriteProvider>
          <div>Test Child</div>
        </FavoriteProvider>
      </QueryClientProvider>
    );
    const child = screen.getByText('Test Child');
    expect(child).toBeInTheDocument();
  });
});
