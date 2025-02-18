import Container from '../../shared/components/container/Container'
import style from './List.module.scss'
import {
	useHeaderCard,
	usePreload,
	useCreateContentInStore,
} from './hooksForList'

function List() {
	const { content, createAt } = useCreateContentInStore()

	if (!content) {
		const ifNoPage = usePreload()
	}

	const headerCard = useHeaderCard(createAt)

	return (
		<Container className={style.container}>
			{headerCard}
			<div className={style.list}>{content}</div>
			<div>
				<input type='text' />
			</div>
		</Container>
	)
}

export default List
