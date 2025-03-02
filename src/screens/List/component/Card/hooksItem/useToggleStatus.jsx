import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeItem } from '../../../../../shop/shoppingListSlice'

function useToggleStatus(idPage, data) {
	const [ids, setIds] = useState([])
	const dispatch = useDispatch()
	// const [isChecked, setIsChecked] = useState(data)

	const handleChangeIds = id => {
		setIds(prevIds => {
			if (prevIds.includes(id)) {
				return prevIds.filter(i => i !== id)
			} else {
				return [...prevIds, id]
			}
		})
	}
	const handleCheckboxChange = itemId => {
		// setIsChecked(prevState => ({
		// 	...prevState,
		// 	items: prevState.itemsDto.map(item =>
		// 		item.id === itemId ? { ...item, isBought: newIsBought } : item
		// 	),
		// }))

		dispatch(changeItem({ idPage, id: itemId }))
	}

	return { handleChangeIds, handleCheckboxChange, ids, setIds }
}

export default useToggleStatus
