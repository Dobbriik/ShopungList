import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function List() {
	const { items, loading, error, lastRequestId } = useSelector(
		state => state.shoppingList
	)
	console.log('lastRequestId', items)
	const navigate = useNavigate()
	const firstItem = items[0]

	useEffect(() => {
		if (!loading && lastRequestId) {
			const lastItem = items.find(item => item.requestId === lastRequestId)
			if (lastItem) {
				navigate(`/List/${lastItem.idPage}`)
			}
		}
	}, [loading, lastRequestId, items, navigate])
	

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		console.log('Ошибка контента', error)
		return <div>Ошибка контента</div>
	}

	if (!firstItem) {
		return <div>Контент отсутствует</div>
	}

	return <div>Контент загружен</div>
}

export default List
