import { useSelector } from 'react-redux'
import Card from './Card'
import { useParams } from 'react-router-dom'
import useNavigateHome from '../../shared/hoks/useNavigateHome'
import useFindPageId from '../../shared/hoks/useCheckedId'

function ListSkeleton() {
	useNavigateHome()
	const data = useSelector(state => state.shoppingList)
	const list = useFindPageId(data)
	let content = 'ошибка'
	if (list) {
		content = list.categories.map((item, index) => (
			<Card key={index} data={item} />
		))
		console.log('есть')
	}
	return (
		<div>
			{content}
			<button
				onClick={() => {
					console.log('list', data)
				}}
			>
				показать
			</button>
		</div>
	)
}

export default ListSkeleton
