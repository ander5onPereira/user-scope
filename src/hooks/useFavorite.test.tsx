import { renderHook } from '@testing-library/react';
import { useFavorite } from './useFavorite';
import { describe, it, expect } from 'vitest';
import { defaultFavoriteContext } from '@/context/favorite/typeFavorite';
import { FavoriteProvider } from '@/context/favorite/FavoriteContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('useFavorite Hook', () => {
  it('should throw an error when used outside of FavoriteProvider', () => {
    let error;
    try {
      renderHook(() => useFavorite());
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(
      new Error('useFavorite must be used within a FavoriteProvider')
    );
  });

  it('should provide the default context when used within FavoriteProvider', () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <FavoriteProvider>{children}</FavoriteProvider>
      </QueryClientProvider>
    );
    const { result } = renderHook(() => useFavorite(), { wrapper });
    expect(result.current.favorites).toEqual(defaultFavoriteContext.favorites);
    expect(result.current.isLoading).toEqual(defaultFavoriteContext.isLoading);
  });
});
