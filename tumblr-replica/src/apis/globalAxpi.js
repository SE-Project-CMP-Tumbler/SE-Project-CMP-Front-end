import axios from 'axios';

export const MOCK = 'http://localhost:8000/';
export const REAL = 'https://api.tumbler.social/api';
export const SERVICETYPE = MOCK; // Change this to change the source
export default axios.create({
  baseURL: SERVICETYPE,
});
