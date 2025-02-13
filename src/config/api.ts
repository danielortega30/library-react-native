import ENV from './env';
import axios from 'axios';

export const apiBooks = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
