import { useParams } from 'react-router-dom'

function useFindPageId(data) {
	const { id } = useParams()
	let list = null
	for (const element of data.items) {
		if (element.idPage == id) {
			list = element
		}
	}
	return list
}

export default useFindPageId
