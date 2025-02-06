import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5149/api', // Базовый URL
  headers: {
    'Content-Type': 'application/json', // Заголовки по умолчанию
  },
  timeout: 0, // Таймаут запроса (5 секунд)
});

export default api;
