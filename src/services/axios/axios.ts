import { ENV } from '@/utils/env';
import axios from 'axios';

export function getAPIClient() {
  const api = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: ENV.VITE_API_URL,
  });
  return api;
}
