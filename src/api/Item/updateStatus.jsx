import api from '../api'

export const updateStatus = async id => {
	try {
		const json = JSON.stringify({ ids: id })
		const response = await api.post(`/items/updatestatus`, { ids: id })
		return response
	} catch (error) {
		console.error('Ошибка при изменении статуса:', error)
		throw error
	}
}
