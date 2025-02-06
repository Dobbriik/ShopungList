import { useDispatch, useSelector } from 'react-redux'
import Card from '../../shared/components/Card/Card'
import { useNavigate, useParams } from 'react-router-dom'
import useNavigateHome from '../../shared/hooks/useNavigateHome'
import useFindPageId from '../../shared/hooks/useFindPageId'
import Container from '../../shared/components/container/Container'
import { ShoppingCart } from 'lucide-react'
import style from './List.module.css'
import { Share2 } from 'lucide-react'
import moment from 'moment'
import useCheckLocale from '../../shared/hooks/useCheckLocale'
import { useRef, useState } from 'react'
import SkeletonCard from '../../shared/components/SkeletonCard/SkeletonCard'
import useFormattedDate from '../../shared/hooks/useFormattedDate'
import { getShoppingList, postShoppingList } from '../../shop/shoppingListSlice'
import { useTranslation } from 'react-i18next'

function List() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const navigateList = useNavigate()
	const navigate = useNavigateHome()
	const [forStore, setForStore] = useState()
	const [copied, setCopied] = useState('default')
	const { id } = useParams()
	const { hasValue, isLoading, error, result } = useCheckLocale(id)
	const data = useSelector(state => state.shoppingList)
	let list = useRef(null)
	list.current = useFindPageId(data)
	const currentUrl = window.location.href
	let content = 'ошибка'
	if (list.current) {
		console.log(list.current)
		content = list.current.categories.map((item, index) => (
			<Card key={index} data={item} />
		))
	} else if (hasValue) {
		list.current = result
		console.log(hasValue)
		content = list.current.categories.map((item, index) => (
			<Card key={index} data={item} />
		))
	} else {
		dispatch(getShoppingList(id))
		navigateList('/List')
	}
	if (!list.current) {
		return <SkeletonCard>{'ошибка'}</SkeletonCard>
	}
	const component = list.current
	const formattedDate = useFormattedDate(component.createdAt)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(currentUrl)
			setCopied('copied')
			setTimeout(() => setCopied('default'), 2000)
		} catch (err) {
			setCopied('error')
			setTimeout(() => setCopied('default'), 2000)
			console.error('Не удалось скопировать текст: ', err)
		}
	}

	console.log('content', content)
	return (
		<Container className={style.container}>
			<div className={style.header}>
				<div className={style.shop}>
					<ShoppingCart />
					<h3 className={style.title}>{t('Shopping list')}</h3>
					<h3 className={style.date}>{formattedDate}</h3>
				</div>
				<div>
					<button className={style.btn} onClick={handleCopy}>
						<Share2
							className={`${style.copy} ${copied == 'default' ? style.default : copied == 'copied' ? style.copied : copied == 'error' ? style.copied : ''}`}
						/>
					</button>
				</div>
			</div>
			<div className={style.list}>{content}</div>
		</Container>
	)
}

export default List
