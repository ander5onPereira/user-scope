import type { ICharacter } from '@/models/character';
import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import { urls } from '@/services/axios/urls';

interface ParamsGetById {
  id: number[];
}

export async function getFindIdCharacters(
  params?: ParamsGetById
): Promise<ICharacter[]> {
  try {
    if (!params) {
      throw handleApiError({ message: 'Params is required' });
    }
    if (params.id.length <= 0) {
      return [];
    }
    if (Array.isArray(params.id)) {
      const searschParams = params.id.join(',');
      const response = await api.get(
        `${urls.character.getAll}/${searschParams}`
      );
      if (response.data?.id) {
        return [response.data];
      }
      return response.data;
    }
    return [];
  } catch (error) {
    throw handleApiError(error);
  }
}
