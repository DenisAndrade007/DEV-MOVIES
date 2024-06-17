import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b79bcbb6da36ac2b47fe46e0d25a4442',
    language: 'pt-BR',
    page: 1,
  },
});

export default api;
