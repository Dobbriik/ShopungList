import { useEffect, useState } from 'react'
import style from './Card.module.css'
import { useDispatch } from 'react-redux'
import { changeItem, postUpdateStatus } from '../../../shop/shoppingListSlice'

function Card({ data, idPage }) {
	const [ids, setIds] = useState([])
	const [debounceTimeout, setDebounceTimeout] = useState()
	const dispatch = useDispatch()
	const [isChecked, setIsChecked] = useState(data)
	const [isHovered, setIsHovered] = useState(false)
	const handleChangeIds = id => {
		console.log('id', id)
		setIds(prevIds => {
			if (prevIds.includes(id)) {
				return prevIds.filter(i => i !== id)
			} else {
				return [...prevIds, id]
			}
		})
	}
	const handleCheckboxChange = (itemId, newIsBought) => {
		setIsChecked(prevState => ({
			...prevState,
			items: prevState.items.map(item =>
				item.id === itemId ? { ...item, isBought: newIsBought } : item
			),
		}))
		dispatch(changeItem({ idPage, id: itemId }))
		// dispatch(postUpdateStatus([itemId]))
	}
	useEffect(() => {
		if (debounceTimeout) {
			clearTimeout(debounceTimeout)
		}

		setDebounceTimeout(
			setTimeout(() => {
				if (ids.length > 0) {
					dispatch(postUpdateStatus(ids))
					setIds([])
				}
			}, 2000)
		)
		console.log('Actual ids:', ids) // Здесь всегда актуальные данные

		return () => {
			if (debounceTimeout) {
				clearTimeout(debounceTimeout)
			}
		}
	}, [ids])
	return (
		<div className={style.container}>
			<h3 className={style.category}>{data.category}</h3>
			<ul>
				{data.items.map(item => (
					<li
						key={item.id}
						id={item.id}
						onClick={() => {
							handleChangeIds(item.id)
							handleCheckboxChange(item.id, !item.isBought)
						}}
						className={`${style.element} ${item.isBought ? style.by : ''}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<input
							type='checkbox'
							checked={item.isBought}
							onChange={() => {
								handleChangeIds(item.id)
								handleCheckboxChange(item.id, !item.isBought)
							}}
						/>
						<p
							className={`${style.strike} ${item.isBought ? style.byStrike : ''}`}
						>
							{item.content.charAt(0).toUpperCase() + item.content.slice(1)}
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Card
