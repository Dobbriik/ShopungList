import api from './api'

export const editItemApi = async (idItems, newContent) => {
	console.log('idItems, newContent', idItems, newContent)
	try {
		const response = await api.put(`/items/edit`, {
			id: idItems,
			content: newContent,
		})
		if (response.statusText === 'OK') {
			console.warn(idItems, newContent)
			return { idItems, newContent }
		}
	} catch (error) {
		console.error('Ошибка при изменении продукта:', error)
		throw error
	}
}
