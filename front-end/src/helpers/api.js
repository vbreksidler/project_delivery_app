import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(async (config) => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  if (token) { config.headers.Authorization = token; }
  return config;
});

export default api;
