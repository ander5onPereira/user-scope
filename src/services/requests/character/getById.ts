import type { ICharacter } from '@/models/character';
import { api } from '@/services';
import { handleApiError } from '@/services/error';
import type { IError } from '@/services/types';
import { urls } from '@/services/urls';

interface ParamsGetById {
  id: number | number[];
}

export async function getByIdCharacters(
  params?: ParamsGetById
): Promise<ICharacter | IError> {
  try {
    if (!params) {
      return handleApiError({ message: 'Params is required' });
    }
    if (Array.isArray(params.id)) {
      const searschParams = params.id.join(',');
      return await api.get(`${urls.character.getAll}/${searschParams}`);
    }
    return await api.get(`${urls.character.getAll}/${params.id}`, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
