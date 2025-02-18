import api from './api'

export const editItem = async (idItems, content) => {
	try {
		const response = await api.put(`/items/edit`, {
			id: idItems,
			content: content,
		})
		return response
	} catch (error) {
		console.error('Ошибка при изменении продукта:', error)
		throw error
	}
}
