import { isAxiosError } from 'axios';
import type { IError } from './types';

interface ApiErrorResponse {
  message?: string;
}

export function handleApiError(
  error: unknown,
  fallback = 'Erro desconhecido'
): IError {
  let message = fallback;

  if (isAxiosError<ApiErrorResponse>(error)) {
    message = error.response?.data?.message ?? fallback;
  } else if (error instanceof Error) {
    message = error.message ?? fallback;
  }

  return {
    content: [],
    error: message,
  };
}
