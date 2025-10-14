import type { ICharacter } from '@/models/character';
import { api } from '@/services';
import { handleApiError } from '@/services/error';
import type {  Params, ResponseProps } from '@/services/types';
import { urls } from '@/services/urls';

export async function getAllCharacters(
  params?: Params
): Promise<ResponseProps<ICharacter>> {
  try {
    const response = await api.get(urls.character.getAll, { params });
    return response.data || { results: [] };
  } catch (error) {
    throw handleApiError(error);
  }
}
