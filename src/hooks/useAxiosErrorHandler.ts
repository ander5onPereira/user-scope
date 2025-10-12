import { toastError } from '@/function/notifications';
import { api } from '@/services';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export function useAxiosErrorHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        const message = error?.response?.data?.message ?? 'Erro desconhecido';

        if (status === 400 || status === 500) {
          toastError({ content: message });

          // Delay to display toast before redirecting
          setTimeout(() => {
            window.location.href = '/';
          }, 1500); // small delay
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [navigate]);
}
