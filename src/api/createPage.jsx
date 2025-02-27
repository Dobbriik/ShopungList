import api from './api'

export const createPage = async prompt => {
	try {
		const response = await api.post('/pages/generate', { prompt })

		console.warn(response)
		const result = {
			idPage: response.data.id,
			categories: response.data.categoriesDto,
			createdAt: response.data.createdAt,
		}

		return result
	} catch (error) {
		console.error('Ошибка при создании страницы:', error)
		throw error
	}
}
