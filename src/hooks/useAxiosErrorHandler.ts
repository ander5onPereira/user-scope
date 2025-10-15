import { toastError } from '@/function/notifications';
import { api } from '@/services';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAxiosErrorHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        const message = error?.response?.data?.error ?? 'Erro desconhecido';
        if (status === 404) {
          if (message === 'Character not found') {
            toastError({ content: message });
            // Delay to display toast before redirecting
            setTimeout(() => {
              window.location.href = '/';
            }, 1500); // small delay
          }
        }

        if (status === 400 || status === 500) {
          console.log('error', message);
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
