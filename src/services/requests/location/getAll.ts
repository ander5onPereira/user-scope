import type { ILocation } from '@/models/location';
import { api } from '@/services';
import { handleApiError } from '@/services/error';
import type { IError, Params, ResponseProps } from '@/services/types';
import { urls } from '@/services/urls';

export async function getAllLocation(
  params?: Params
): Promise<ResponseProps<ILocation> | IError> {
  try {
    return await api.get(urls.location.getAll, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
