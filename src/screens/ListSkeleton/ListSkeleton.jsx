import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from '../../shared/components/SkeletonCard/SkeletonCard'

function ListSkeleton() {
	const { items, loading, error, lastRequestId } = useSelector(
		state => state.shoppingList
	)
<<<<<<< HEAD

=======
>>>>>>> upstream/main
	const navigate = useNavigate()
	const firstItem = items[0]

	useEffect(() => {
		if (!loading && lastRequestId) {
			const lastItem = items.find(item => item.createdAt === lastRequestId)
			if (lastItem) {
				navigate(`/List/${lastItem.idPage}`)
			}
		}
	}, [loading, lastRequestId, items, navigate])

	if (loading) {
		return <SkeletonCard />
	}

	if (error) {
		console.log('Content Error', error)
		return <SkeletonCard>{'Content Error'}</SkeletonCard>
	}

	if (!firstItem) {
		return <SkeletonCard>{'Content is missing'}</SkeletonCard>
	}

	return <div>Content loaded</div>
}

export default ListSkeleton
