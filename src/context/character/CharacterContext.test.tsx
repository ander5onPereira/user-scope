import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CharacterProvider } from './CharacterContext';

describe('CharacterProvider Context', () => {
  it('renders children correctly', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <CharacterProvider>
          <div>Test Child</div>
        </CharacterProvider>
      </QueryClientProvider>
    );
    const child = screen.getByText('Test Child');
    expect(child).toBeInTheDocument();
  });
});
