import { useEffect, useState } from 'react'
import style from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { changeItem, postUpdateStatus } from '../../../shop/shoppingListSlice'
import { Checkbox } from 'antd'

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

		return () => {
			if (debounceTimeout) {
				clearTimeout(debounceTimeout)
			}
		}
	}, [ids])
	return (
		<div className={style.container}>
			<h4 className={style.category}>{data.category}</h4>
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
						<Checkbox
							checked={item.isBought}
							onChange={() => {
								handleChangeIds(item.id)
								handleCheckboxChange(item.id, !item.isBought)
							}}
						/>
						{/* <input
							type='checkbox'
							checked={item.isBought}
							onChange={() => {
								handleChangeIds(item.id)
								handleCheckboxChange(item.id, !item.isBought)
							}}
						/> */}
						<h6
							className={`${style.strike} ${item.isBought ? style.byStrike : ''}`}
						>
							{item.content.charAt(0).toUpperCase() + item.content.slice(1)}
						</h6>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Card
