import { useContext } from 'react';

import CharacterContext from '@/context/character/CharacterContext';
import { defaultCharacterContext } from '@/context/character/typeCharacter';

export function useCharacter() {
  const context = useContext(CharacterContext);

  if (context === defaultCharacterContext) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
}
