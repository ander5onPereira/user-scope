import type { ICharacter } from '@/models/character';
import type { ResponseProps } from '@/services/types';

export interface CharacterContextType {
  isLoading: boolean;
  character: ResponseProps<ICharacter> | null | undefined;
  currentCharacter: ICharacter | undefined;
  handlerNextPage: () => void;
  handlerPrevPage: () => void;
  page?: string;
  refetchCharacter?: () => void;
  handleSetSearch: (name: string) => void;
}
export const defaultCharacterContext: CharacterContextType = {
  isLoading: false,
  character: undefined,
  currentCharacter: undefined,
  handlerNextPage: () => {},
  handlerPrevPage: () => {},
  page: '1',
  refetchCharacter: () => {},
  handleSetSearch: () => {},
};

export interface Props {
  children: React.ReactNode;
}
