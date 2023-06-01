import axios from 'axios';
import store from '../redux';

const api = axios.create({
  baseURL: 'https://dummyjson.com/',
});

api.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default api;
