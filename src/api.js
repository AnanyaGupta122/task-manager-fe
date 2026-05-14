import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task-manager-be-production-4dae.up.railway.app/api',
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
