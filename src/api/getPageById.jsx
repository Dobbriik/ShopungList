import api from './api.jsx'
import filterDefault from './filterDefault.jsx'
export const getPageById = async id => {
	try {
		const response = await api.get(`/pages/${id}`)
<<<<<<< HEAD
=======
		console.log('responseresponseresponse', response)
>>>>>>> upstream/main
		const list = filterDefault(response.data.categories)

		const result = {
			idPage: response.data.id,
			categories: [],
			createdAt: response.data.createdAt,
		}

		for (const element of list) {
			result.categories = [
				...result.categories,
				{ category: element.name, items: getItems(element.items) },
			]
		}
<<<<<<< HEAD
=======
		console.log('resultresultresult', result)
>>>>>>> upstream/main
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
