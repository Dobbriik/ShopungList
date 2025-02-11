import Container from '../../shared/components/container/Container'
import style from './List.module.scss'
import {
	useHeaderCard,
	usePreload,
	useCreateContentInStore,
} from './hooksForList'

function List() {
	const { content, requestId } = useCreateContentInStore()

	if (!content) {
		const ifNoPage = usePreload()
	}

	const headerCard = useHeaderCard(requestId)

	return (
		<Container className={style.container}>
			{headerCard}
			<div className={style.list}>{content}</div>
		</Container>
	)
}

export default List
