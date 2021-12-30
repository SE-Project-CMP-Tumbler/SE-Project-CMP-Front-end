import axios from 'axios';
var app = express();

// ADD THIS
var cors = require('cors');
app.use(cors());

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const apiR = axios.create({
  baseURL: 'https://api.dev.tumbler.social/api',
});
