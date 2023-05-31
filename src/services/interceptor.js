import api from './api';

// Add an interceptor for async requests
api.interceptors.request.use(
  async config => {
    // Perform any actions before the request is sent

    // For example, you can add headers or perform authentication checks

    return config;
  },
  error => {
    // Handle request error
    console.log({error});
    return Promise.reject(error);
  },
);

export default api;
