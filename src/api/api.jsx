import axios from 'axios'

const baseURL = import.meta.env.VITE_API_LOCALE_URL

const api = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 0,
})

export default api
