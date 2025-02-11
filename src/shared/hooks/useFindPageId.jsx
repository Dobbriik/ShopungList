import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function useFindPageId(id) {
	const data = useSelector(state => state.shoppingList)
	let list = null
	for (const element of data.items) {
		if (element.idPage == id) {
			list = element
		}
	}
	return list
}

export default useFindPageId
