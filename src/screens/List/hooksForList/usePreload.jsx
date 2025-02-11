import { useEffect } from 'react'
import { getShoppingList } from '../../../shop/shoppingListSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function usePreload() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const navigateList = useNavigate()

	useEffect(() => {
		console.log('id list', id)
		dispatch(getShoppingList(id))
		navigateList('/List')
	}, [])
}

export default usePreload
