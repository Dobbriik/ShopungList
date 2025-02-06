import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createPage } from '../api/createPage.jsx'
import { getPageById } from '../api/getPageById.jsx'

export const postShoppingList = createAsyncThunk(
	'shoppingList/postShoppingList',
	async prompt => {
		const data = await createPage(prompt)
		return { ...data, requestId: Date.now() }
	}
)

export const getShoppingList = createAsyncThunk(
	'shoppingList/getShoppingList',
	async id => {
		console.log('getShoppingList', id)
		const data = await getPageById(id)
		return { ...data, requestId: Date.now() }
	}
)

const shoppingListSlice = createSlice({
	name: 'shoppingList',
	initialState: {
		items: [],
		loading: false,
		error: null,
		lastRequestId: null,
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload)
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((_, i) => i !== action.payload)
		},
		changeItem: (state, action) => {
			const { index, newItem } = action.payload
			state.items[index] = newItem
		},
	},
	extraReducers: builder => {
		builder
			.addCase(postShoppingList.pending, state => {
				state.loading = true
				state.error = null
				state.lastRequestId = Date.now()
			})
			.addCase(postShoppingList.fulfilled, (state, action) => {
				state.loading = false
				state.items.push(action.payload)
				state.lastRequestId = action.payload.requestId
			})
			.addCase(postShoppingList.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(getShoppingList.pending, state => {
				state.loading = true
				state.error = null
				state.lastRequestId = Date.now()
			})
			.addCase(getShoppingList.fulfilled, (state, action) => {
				state.loading = false
				state.items.push(action.payload)
				state.lastRequestId = action.payload.requestId
			})
			.addCase(getShoppingList.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export const { addItem, removeItem, changeItem } = shoppingListSlice.actions
export default shoppingListSlice.reducer
