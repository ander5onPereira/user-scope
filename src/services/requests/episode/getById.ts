import type { IEpisode } from '@/models/episode';
import { api } from '@/services';
import { handleApiError } from '@/services/error';
import type { IError } from '@/services/types';
import { urls } from '@/services/urls';

interface ParamsGetById {
  id: number | number[];
}

export async function getByIdEpisode(
  params?: ParamsGetById
): Promise<IEpisode | IError> {
  try {
    if (!params) {
      return handleApiError({ message: 'Params is required' });
    }
    if (Array.isArray(params.id)) {
      const searschParams = params.id.join(',');
      return await api.get(`${urls.episode.getAll}/${searschParams}`);
    }
    return await api.get(`${urls.episode.getAll}/${params.id}`, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
