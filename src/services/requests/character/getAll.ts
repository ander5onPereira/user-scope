import type { ICharacter } from '@/models/character';
import { api } from '@/services';
import { handleApiError } from '@/services/error';
import type { IError, Params, ResponseProps } from '@/services/types';
import { urls } from '@/services/urls';

export async function getAllCharacters(
  params?: Params
): Promise<ResponseProps<ICharacter> | IError> {
  try {
    return await api.get(urls.character.getAll, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
