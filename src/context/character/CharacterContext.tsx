import type { ICharacter } from '@/models/character';
// import { getAllCharacters } from '@/services/requests/character/getAll'; // Request API Rest
// import { getByIdCharacters } from '@/services/requests/character/getById'; // Request API Rest
import type { ResponseProps } from '@/services/axios/types';
import { useQuery } from '@tanstack/react-query';
import { createContext, useCallback, useState, type ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import {
  defaultCharacterContext,
  type CharacterContextType,
} from './typeCharacter';
import { getAllCharactersApollo } from '@/services/apollo/character/getAll'; // Request API graphql
import { getByIdCharactersApollo } from '@/services/apollo/character/getById'; // Request API graphql

const CharacterContext = createContext<CharacterContextType>(
  defaultCharacterContext
);

interface CharacterProviderProps {
  children: ReactNode;
}
export function CharacterProvider({ children }: CharacterProviderProps) {
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [page, setPage] = useState('1');
  const [search, setSearch] = useState('');

  const { data, isLoading, refetch } = useQuery<ResponseProps<ICharacter>>({
    queryKey: ['character', page, search],
    // queryFn: () => getAllCharacters({ page: page, name: search }), // Request API Rest
    queryFn: () => getAllCharactersApollo({ page: Number(page), name: search }), // Request API graphql
    staleTime: 60 * 1000,
  });

  const { data: characterDetail, isLoading: isLoadingDetail } =
    useQuery<ICharacter>({
      queryKey: [`character-${id}`],
      // queryFn: () => getByIdCharacters({ id: Number(id) }),  // Request API Rest
      queryFn: () => getByIdCharactersApollo({ id: Number(id) }), // Request API graphql
      staleTime: 60 * 1000,
      enabled: !!id,
    });
  function handleSetSearch(name: string) {
    if (name.length >= 3 || name.length === 0) {
      setSearch(name);
    }
    setPage('1');
  }
  const handlerNextPage = useCallback(() => {
    if (data?.info.next) {
      const url = new URL(data.info.next);
      const nextPage = url.searchParams.get('page');
      if (nextPage) {
        setPage(nextPage);
      }
    }
  }, [data]);
  const handlerPrevPage = useCallback(() => {
    if (data?.info.prev) {
      const url = new URL(data.info.prev);
      const prevPage = url.searchParams.get('page');
      if (prevPage) {
        setPage(prevPage);
      }
    }
  }, [data]);

  return (
    <CharacterContext.Provider
      value={{
        character: data || undefined,
        isLoading: isLoading || isLoadingDetail,
        currentCharacter: characterDetail || undefined,
        handlerNextPage,
        handlerPrevPage,
        page,
        refetchCharacter: refetch,
        handleSetSearch,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
export default CharacterContext;
