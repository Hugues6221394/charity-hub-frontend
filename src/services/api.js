import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://charity-hub-backend.onrender.com';

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log("API URL = ", API_BASE_URL);

export const BACKEND_BASE_URL = API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
