import type { ILocation } from '@/models/location';
import { api } from '@/services/axios';
import { handleApiError } from '@/services/axios/error';
import type { IError, Params, ResponseProps } from '@/services/axios/types';
import { urls } from '@/services/axios/urls';

export async function getAllLocation(
  params?: Params
): Promise<ResponseProps<ILocation> | IError> {
  try {
    return await api.get(urls.location.getAll, { params });
  } catch (error) {
    return handleApiError(error);
  }
}
