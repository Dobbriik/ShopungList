import Container from '../../shared/components/container/Container'
import style from './List.module.scss'
import SkeletonCard from '../../shared/components/SkeletonCard/SkeletonCard'
import { useHeaderCard } from './hooksForList'
import usePreload from './hooksForList/usePreload'
import useCreateContentInStore from './hooksForList/useGetPageInStore'

function List() {
	const { content, requestId } = useCreateContentInStore()
	if (!content) {
		const ifNoPage = usePreload()
	}

	if (!content) {
		return <SkeletonCard>{'error no page'}</SkeletonCard>
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
