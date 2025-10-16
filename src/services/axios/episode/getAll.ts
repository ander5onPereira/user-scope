import type { IEpisode } from '@/models/episode';

import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import type { IError, Params, ResponseProps } from '@/services/axios/types';
import { urls } from '@/services/axios/urls';

export async function getAllEpisode(
  params?: Params
): Promise<ResponseProps<IEpisode> | IError> {
  try {
    return await api.get(urls.episode.getAll, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
