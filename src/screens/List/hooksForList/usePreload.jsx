import { useEffect } from 'react'
import { getShoppingList } from '../../../shop/shoppingListSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useCreateContentInStore from './useCreateContentInStore'

function usePreload() {
	const { id, content } = useCreateContentInStore()

	const dispatch = useDispatch()
	const navigateList = useNavigate()

	useEffect(() => {
		if (!content && id) {
			dispatch(getShoppingList(id))
			navigateList('/List')
		}
	}, [content, id, dispatch, navigateList])
}

export default usePreload
