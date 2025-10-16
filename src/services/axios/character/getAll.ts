import type { ICharacter } from '@/models/character';
import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import type {  Params, ResponseProps } from '@/services/axios/types';
import { urls } from '@/services/axios/urls';

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
