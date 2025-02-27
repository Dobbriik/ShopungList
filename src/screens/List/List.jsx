import { useEffect } from 'react'
import Container from '../../shared/components/container/Container'
import style from './List.module.scss'
import InputAddItem from './component/InputAddItem'
import {
	useHeaderCard,
	usePreload,
	useCreateContentInStore,
} from './hooksForList'
import useAddNewItem from './hooksForList/useAddNewItem'

function List() {
	const { data, id, content, createAt } = useCreateContentInStore()

	usePreload()

	const headerCard = useHeaderCard(createAt)

	const addNewItem = useAddNewItem()

	return (
		<Container className={style.container}>
			{headerCard}
			<div className={style.list}>{content}</div>
			<InputAddItem data={data} id={id} addNewItem={addNewItem} />
		</Container>
	)
}

export default List
