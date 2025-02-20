export const changeItem = async (pageId, content, categoryName) => {
	try {
		const response = await api.post(`/items/${pageId}`, {
			content,
			categoryName,
		})
		return response
	} catch (error) {
		console.error('Ошибка при изменении статуса:', error)
		throw error
	}
}
