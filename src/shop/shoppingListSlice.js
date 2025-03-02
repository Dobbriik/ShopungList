import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createPage } from '../api/createPage.jsx'
import { getPageById } from '../api/getPageById.jsx'
import { updateStatus } from '../api/updateStatus.jsx'
import { editItemApi } from '../api/editItemApi.jsx'
import { addNewItem } from '../api/addNewItem.jsx'
import { deleteItem } from '../api/deleteItem.jsx'

export const postShoppingList = createAsyncThunk(
	'shoppingList/postShoppingList',
	async prompt => {
		const data = await createPage(prompt)
		return { ...data }
	}
)

export const postAddNewItem = createAsyncThunk(
	'shoppingList/postAddNewItem',
	async ({ id, content, idPage }) => {
		const data = await addNewItem({ id, content })
		return { data, idPage, id }
	}
)

export const getShoppingList = createAsyncThunk(
	'shoppingList/getShoppingList',
	async id => {
		const data = await getPageById(id)
		return { ...data }
	}
)

export const putShoppingList = createAsyncThunk(
	'shoppingList/putShoppingList',
	async ({ idItem, newContent }) => {
		const data = await editItemApi(idItem, newContent)
		return data
	}
)

export const postUpdateStatus = createAsyncThunk(
	'shoppingList/postUpdateStatus',
	async id => {
		const data = await updateStatus(id)
	}
)

export const delItem = createAsyncThunk('shoppingList/delItem', async id => {
	const data = await deleteItem(id)
	return data
})

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
		removeItemElement: (state, action) => {
			const { idPage, idCategory, id } = action.payload
			console.warn({ idPage, idCategory, id })
			state.items = state.items.map(item => {
				if (item.idPage === idPage) {
					const newItem = { ...item }

					newItem.categories = newItem.categories.map(category => {
						if (category.id === idCategory) {
							return {
								...category,
								itemsDto: category.itemsDto.filter(i => i.id !== id),
							}
						}
						return category
					})
					return newItem
				}
				return item
			})
		},
		changeItem: (state, action) => {
			const { idPage, id } = action.payload
			console.log('{ idPage, id }', { idPage, id })
			let changedItem = {}
			for (const items of state.items) {
				if (items.idPage === idPage) {
					changedItem = items
					let forChangeCategory = []
					for (const categories of items.categories) {
						const itemsDto = categories.itemsDto.map(i => {
							return i.id === id ? { ...i, isBought: !i.isBought } : i
						})
						let newCategories = { ...categories, itemsDto }
						forChangeCategory.push(newCategories)
					}
					changedItem.categories = forChangeCategory
				}
			}
			state.items = state.items.map(i => {
				return i.idPage == idPage ? changedItem : i
			})
			console.log('changedItem', changedItem)
			console.warn(state.items)
		},
		editItem: (state, action) => {
			const { idPage, idItem, newContent } = action.payload
			for (const items of state.items) {
				if (items.idPage === idPage) {
					for (const categories of items.categories) {
						const product = categories.itemsDto.find(item => item.id === idItem)
						if (product) {
							product.content = newContent
						}
					}
				}
			}
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
				state.lastRequestId = action.payload.createdAt
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
				state.lastRequestId = action.payload.createdAt
			})
			.addCase(getShoppingList.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(postAddNewItem.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(postAddNewItem.fulfilled, (state, action) => {
				const { data, idPage, id } = action.payload
				console.log('{data,idPage}', { data, idPage })
				for (const items of state.items) {
					if (items.idPage === idPage) {
						for (const categories of items.categories) {
							if (categories.id === id) {
								categories.itemsDto.push(data)
							}
						}
					}
				}
				state.loading = false
			})
			.addCase(postAddNewItem.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export const { addItem, removeItemElement, changeItem, editItem } =
	shoppingListSlice.actions
export default shoppingListSlice.reducer
