import api from './api'

export const addNewItem = async ({ id, content }) => {
	console.warn('addNewItem', id, content)
	try {
		const response = await api.post('/items', { categoryId: id, content })
		return response.data
	} catch (error) {
		console.error('Ошибка при добавление элемента:', error)
		throw error
	}
}
