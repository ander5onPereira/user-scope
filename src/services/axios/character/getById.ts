import type { ICharacter } from '@/models/character';
import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import { urls } from '@/services/axios/urls';

interface ParamsGetById {
  id: number;
}

export async function getByIdCharacters(
  params?: ParamsGetById
): Promise<ICharacter> {
  try {
    if (!params) {
      throw handleApiError({ message: 'Params is required' });
    }
    const response = await api.get(`${urls.character.getAll}/${params.id}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
