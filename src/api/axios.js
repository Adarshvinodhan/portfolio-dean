import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-dean-nodejs.onrender.com/api'
});

export default api;