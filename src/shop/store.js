import { configureStore } from '@reduxjs/toolkit'
import shoppingListReducer from './shoppingListSlice'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'

const preloadedState = loadState()

export const store = configureStore({
	reducer: {
		shoppingList: shoppingListReducer,
	},
	preloadedState,
})

store.subscribe(
	throttle(() => {
		saveState(store.getState())
	}, 1000)
)
