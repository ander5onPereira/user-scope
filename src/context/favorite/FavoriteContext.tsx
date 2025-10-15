import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { ICharacter } from '@/models/character';
import { getFindIdCharacters } from '@/services/requests/character/getFindId';
import { addIfNotExists, removeItem } from '@/utils/array';
import { useQuery } from '@tanstack/react-query';
import { createContext, useCallback, useState, type ReactNode } from 'react';
import {
  defaultFavoriteContext,
  type FavoriteContextType,
} from './typeFavorite';
import { toastInfo, toastSuccess } from '@/function/notifications';
import { useTranslation } from 'react-i18next';

const FavoriteContext = createContext<FavoriteContextType>(
  defaultFavoriteContext
);

interface FavoriteProviderProps {
  children: ReactNode;
}
export function FavoriteProvider({ children }: FavoriteProviderProps) {
  const { t } = useTranslation();
  const { storage, setValue } = useLocalStorage<Array<number>>('favorites');

  const [search, setSearch] = useState<string>('');

  function handleSetSearch(name: string) {
    setSearch(name);
  }

  const { data, isLoading } = useQuery<ICharacter[]>({
    queryKey: [`favorite-${storage}`],
    queryFn: () => getFindIdCharacters({ id: storage || [] }),
    staleTime: 60 * 1000,
    enabled: !!storage,
  });
  function removeItemFavorite(itemToRemove: number) {
    if (!storage || !Array.isArray(storage)) return;

    const newStorage = removeItem(storage, itemToRemove);
    setValue(newStorage);
    toastInfo({ content: t('removedFavorite') });
  }
  function addItemFavorite(itemToRemove: number) {
    if (!storage || !Array.isArray(storage)) return;

    const newStorage = addIfNotExists(storage, itemToRemove);
    setValue(newStorage);
    toastSuccess({ content: t('successFavorite') });
  }

  const handleFilter = useCallback(() => {
    return (data || [])?.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
  }, [data, search]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites: handleFilter(),
        isLoading,
        removeItemFavorite,
        addItemFavorite,
        storage,
        handleSetSearch,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
