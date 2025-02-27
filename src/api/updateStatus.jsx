import api from './api'

export const updateStatus = async id => {
	try {
		const response = await api.patch(`/items/toggle-status`, {
			itemsId: [...id],
		})
		return response
	} catch (error) {
		console.error('Ошибка при изменении статуса:', error)
		throw error
	}
}
