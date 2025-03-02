import { useDispatch } from 'react-redux'
import { postAddNewItem } from '../../../shop/shoppingListSlice'

function useAddNewItem() {
	const dispatch = useDispatch()
	return function (id, newItem, idPage) {
		console.log('id, newItem, idPage', id, newItem, idPage)
		dispatch(postAddNewItem({ id, content: newItem, idPage }))
		console.log(id, newItem)
	}
}

export default useAddNewItem
