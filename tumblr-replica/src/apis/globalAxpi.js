import axios from 'axios';

export default axios.create({
  api: 'http://localhost:8000/',
  apiR: 'https://api.tumbler.social/api',

});
