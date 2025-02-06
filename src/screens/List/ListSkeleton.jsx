import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import style from './List.module.css'
import SkeletonCard from '../../shared/components/SkeletonCard/SkeletonCard'

function ListSkeleton() {
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
		return <SkeletonCard />
	}

	if (error) {
		console.log('Ошибка контента', error)
		return (
			<div>
				<SkeletonCard>{'Ошибка контента'}</SkeletonCard>
			</div>
		)
	}

	if (!firstItem) {
		return (
			<div>
				<SkeletonCard>{'Контент отсутствует'}</SkeletonCard>
			</div>
		)
	}

	return <div>Контент загружен</div>
}

export default ListSkeleton
