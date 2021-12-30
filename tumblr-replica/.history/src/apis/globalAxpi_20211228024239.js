import axios from 'axios';\

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const apiR = axios.create({
  baseURL: 'https://api.dev.tumbler.social/api',
});
