import { useDispatch } from 'react-redux'
import {
	delItem,
	removeItemElement,
} from '../../../../../shop/shoppingListSlice'

function useDeleteItem() {
	const dispatch = useDispatch()
	return function (id, idPage, idCategory) {
		dispatch(delItem(id))
		dispatch(removeItemElement({ idPage, idCategory, id }))
	}
}

export default useDeleteItem
