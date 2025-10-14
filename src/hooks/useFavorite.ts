import { useContext } from 'react';

import FavoriteContext from '@/context/favorite/FavoriteContext';
import { defaultFavoriteContext } from '@/context/favorite/typeFavorite';

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === defaultFavoriteContext) {
    throw new Error('useFavorite must be used within a FavoriteProvider');
  }
  return context;
}
