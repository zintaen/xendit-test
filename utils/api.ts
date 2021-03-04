import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const authApi = axios.create({ baseURL });
const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('access_token');

  if (token) {
    config.headers.authorization = token;
  }

  return config;
});

export default api;
