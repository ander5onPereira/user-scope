import type { ICharacter } from '@/models/character';

export interface FavoriteContextType {
  favorites: ICharacter[];
  isLoading: boolean;
  removeItemFavorite: (itemToRemove: number) => void;
  addItemFavorite: (itemToRemove: number) => void;
  storage: Array<number> | undefined;
  handleSetSearch: (name: string) => void;
}
export const defaultFavoriteContext: FavoriteContextType = {
  favorites: [],
  isLoading: true,
  removeItemFavorite: () => {},
  addItemFavorite: () => {},
  storage: undefined,
  handleSetSearch: () => {},
};

export interface Props {
  children: React.ReactNode;
}
