import Container from '../../shared/components/container/Container'
import style from './List.module.scss'
import InputAddItem from './component/InputAddItem'
import {
	useHeaderCard,
	usePreload,
	useCreateContentInStore,
} from './hooksForList'

function List() {
	const { data, id, content, createAt } = useCreateContentInStore()

	if (!content) {
		const ifNoPage = usePreload()
	}

	const headerCard = useHeaderCard(createAt)

	return (
		<Container className={style.container}>
			{headerCard}
			<div className={style.list}>{content}</div>
			{/* <InputAddItem data={data} id={id} /> */}
		</Container>
	)
}

export default List
