import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://localhost:8000/',
});

export const apiR = axios.create({
  baseURL: 'https://api.dev.tumbler.social/api',
});
