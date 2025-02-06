export const loadState = () => {
	try {
		const shoppingList = {
			items: [],
			loading: false,
			error: null,
			lastRequest: null,
		}
		const allItems = []
		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i)
			allItems.push(JSON.parse(localStorage.getItem(key)))
		}
		if (allItems.length === 0) {
			return undefined
		}
		shoppingList.items = allItems
		return { shoppingList }
	} catch (err) {
		console.error('Failed to load state:', err)
		return undefined
	}
}

export const saveState = state => {
	console.log('state', state)
	try {
		for (const element of state.shoppingList.items) {
			const serializedState = JSON.stringify(element)
			localStorage.setItem(element.idPage, serializedState)
		}
	} catch (err) {
		console.error('Failed to save state:', err)
	}
}
