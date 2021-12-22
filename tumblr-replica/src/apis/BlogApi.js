import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.dev.tumbler.social/api/',
});
