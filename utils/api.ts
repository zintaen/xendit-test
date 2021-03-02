import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const authApi = axios.create({
  baseURL,
  timeout: 3000,
});

const api = axios.create({
  baseURL,
  timeout: 3000,
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('access_token');

  if (token) {
    config.headers.authorization = token;
  }

  return config;
});

export default api;
