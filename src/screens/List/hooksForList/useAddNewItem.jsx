import { useDispatch } from 'react-redux'
import { postAddNewItem } from '../../../shop/shoppingListSlice'

function useAddNewItem() {
	const dispatch = useDispatch()
	return function (id, newItem) {
		dispatch(postAddNewItem({ id, content: newItem }))
		console.log(id, newItem)
	}
}

export default useAddNewItem
