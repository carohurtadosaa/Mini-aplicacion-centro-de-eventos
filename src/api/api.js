import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tu-api.com',
  timeout: 5000
});

export default api;
