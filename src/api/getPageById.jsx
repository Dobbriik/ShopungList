import api from './api.jsx'
import filterDefault from './filterDefault.jsx'
export const getPageById = async id => {
	try {
		const response = await api.get(`/pages/${id}`)
		console.warn('get', response)

		const result = {
			idPage: response.data.id,
			categories: response.data.categoriesDto,
			createdAt: response.data.createdAt,
		}

		return result
	} catch (error) {
		console.error('Ошибка при получении страницы:', error)
		throw error
	}
}

function getItems(arr) {
	const result = []
	for (const element of arr) {
		const item = {
			id: element.id,
			isBought: element.isBought,
			content: element.content,
		}
		result.push(item)
	}
	return result
}
