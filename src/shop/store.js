import { configureStore } from '@reduxjs/toolkit'
import shoppingListReducer from './shoppingListSlice'

// const loadState = () => {
// 	try {
// 		const serializedState = localStorage.getItem('reduxState')
// 		if (serializedState === null) {
// 			return undefined
// 		}
// 		return JSON.parse(serializedState)
// 	} catch (err) {
// 		console.error('Failed to load state:', err)
// 		return undefined
// 	}
// }

// const saveState = state => {
// 	try {
// 		const serializedState = JSON.stringify(state)
// 		localStorage.setItem('reduxState', serializedState)
// 	} catch (err) {
// 		console.error('Failed to save state:', err)
// 	}
// }

// const preloadedState = loadState()

export const store = configureStore({
	reducer: {
		shoppingList: shoppingListReducer,
	},
	// preloadedState,
})

// store.subscribe(
//   throttle(() => {
//     saveState(store.getState());
//   }, 1000)
// );
