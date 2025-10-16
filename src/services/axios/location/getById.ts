import type { ILocation } from '@/models/location';
import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import type { IError } from '@/services/axios/types';
import { urls } from '@/services/axios/urls';

interface ParamsGetById {
  id: number | number[];
}

export async function getByIdLocation(
  params?: ParamsGetById
): Promise<ILocation | IError> {
  try {
    if (!params) {
      return handleApiError({ message: 'Params is required' });
    }
    if (Array.isArray(params.id)) {
      const searschParams = params.id.join(',');
      return await api.get(`${urls.location.getAll}/${searschParams}`);
    }
    return await api.get(`${urls.location.getAll}/${params.id}`, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
