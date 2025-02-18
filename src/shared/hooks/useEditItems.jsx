import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editItem, putShoppingList } from '../../shop/shoppingListSlice'

function useEditItems() {
	const dispatch = useDispatch()

	return function ({ idPage, idItem, newContent }) {
		console.log('useEditItems', { idPage, idItem, newContent })
		if (idPage && idItem && newContent) {
			dispatch(putShoppingList({ idItem, newContent }))
			dispatch(editItem({ idPage, idItem, newContent }))
		}
	}
}

export default useEditItems
