import type { IEpisode } from '@/models/episode';
import { api } from '@/services';
import { handleApiError } from '@/services/error';

interface ParamsGet {
  url: string;
}

export async function getUrl(params?: ParamsGet): Promise<IEpisode> {
  try {
    if (!params) {
      throw handleApiError({ message: 'Params is required' });
    }
    const response = await api.get(params.url, { baseURL: '' });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
