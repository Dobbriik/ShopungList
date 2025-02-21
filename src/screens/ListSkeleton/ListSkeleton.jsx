import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from '../../shared/components/SkeletonCard/SkeletonCard'

function ListSkeleton() {
	const { items, loading, error, lastRequestId } = useSelector(
		state => state.shoppingList
	)
	const navigate = useNavigate()
	let lastItem

	useEffect(() => {
		if (!loading && lastRequestId) {
			lastItem = items.find(item => item.createdAt === lastRequestId)
			if (lastItem) {
				navigate(`/List/${lastItem.idPage}`)
			}
		}
	}, [loading, lastRequestId, items, navigate])

	useEffect(() => {
		if (error || !lastItem) {
			setTimeout(() => {
				navigate('/')
			}, 6000)
		}
	}, [])

	if (loading) {
		return <SkeletonCard />
	}

	if (error) {
		console.log('Content Error', error)
		return <SkeletonCard>{'Content Error'}</SkeletonCard>
	}

	if (!lastItem) {
		return <SkeletonCard>{'Content is missing'}</SkeletonCard>
	}

	return (
		<SkeletonCard>
			<div>Content loaded</div>
		</SkeletonCard>
	)
}

export default ListSkeleton
