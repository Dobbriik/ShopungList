import api from './api'

export const deleteItem = async id => {
	console.warn(id)
	try {
		const response = await api.delete(`/items/${id}`)
	} catch (error) {
		console.error('Ошибка при удаление элемента:', error)
		throw error
	}
}
