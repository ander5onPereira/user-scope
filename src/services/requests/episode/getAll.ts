import type { IEpisode } from '@/models/episode';

import { api } from '@/services';
import { handleApiError } from '@/services/error';
import type { IError, Params, ResponseProps } from '@/services/types';
import { urls } from '@/services/urls';

export async function getAllEpisode(
  params?: Params
): Promise<ResponseProps<IEpisode> | IError> {
  try {
    return await api.get(urls.episode.getAll, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
