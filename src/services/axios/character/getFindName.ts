import type { ICharacter } from '@/models/character';
import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import { urls } from '@/services/axios/urls';

interface ParamsGetName {
  name: string;
}

export async function getFindIdCharacters(
  params?: ParamsGetName
): Promise<ICharacter[]> {
  try {
     if (!params) {
      throw handleApiError({ message: 'Params is required' });
    }
    const response = await api.get(`${urls.character.getAll}/${params.name}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
