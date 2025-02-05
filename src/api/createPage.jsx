import api from './api'

export const createPage = async prompt => {
	try {
		const response = await api.post('/pages', { prompt })
		const list = response.data.categories.slice(0, -1)
		console.log(response)

		const result = {
			idPage: response.data.id,
			categories: [],
		}

		for (const element of list) {
			result.categories = [
				...result.categories,
				{ category: element.name, items: getItems(element.items) },
			]
		}
		return result
	} catch (error) {
		console.error('Ошибка при создании страницы:', error)
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
