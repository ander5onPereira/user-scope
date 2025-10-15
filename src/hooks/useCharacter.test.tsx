import { renderHook } from '@testing-library/react';
import { useCharacter } from './useCharacter';
import { describe, it, expect } from 'vitest';
import { defaultCharacterContext } from '@/context/character/typeCharacter';
import { CharacterProvider } from '@/context/character/CharacterContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('useCharacter Hook', () => {
  it('should throw an error when used outside of CharacterProvider', () => {
    expect(() => renderHook(() => useCharacter())).toThrow(
      'useCharacter must be used within a CharacterProvider'
    );
  });

  it('should provide the default context when used within CharacterProvider', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <CharacterProvider>{children}</CharacterProvider>
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useCharacter(), { wrapper });
    expect(result.current.character).toBeUndefined();
    expect(result.current.isLoading).toEqual(defaultCharacterContext.isLoading);
    expect(result.current.page).toEqual(defaultCharacterContext.page);
  });
});
