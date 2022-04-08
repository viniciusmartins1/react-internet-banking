import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    console.log(error)
  }
})