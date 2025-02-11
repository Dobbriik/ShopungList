import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({
	baseURL: baseURL, // Базовый URL
	headers: {
		'Content-Type': 'application/json', // Заголовки по умолчанию
	},
	timeout: 0, // Таймаут запроса (5 секунд)
})

export default api
