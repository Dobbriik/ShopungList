import { useState } from 'react'
import style from './Card.module.css'
function Card({ data }) {
	const [isChecked, setIsChecked] = useState(data)
	const handleCheckboxChange = (itemId, newIsBought) => {
		setIsChecked(prevState => ({
			...prevState,
			items: prevState.items.map(item =>
				item.id === itemId ? { ...item, isBought: newIsBought } : item
			),
		}))
	}

	return (
		<div className={style.container}>
			<h3 className={style.category}>{data.category}</h3>
			<ul>
				{isChecked.items.map(item => (
					<li
						key={item.id}
						id={item.id}
						onClick={() => {
							handleCheckboxChange(item.id, !item.isBought)
						}}
						className={style.element}
					>
						<input
							key={item.id}
							type='checkbox'
							checked={item.isBought}
							onChange={() => {
								handleCheckboxChange(item.id, !item.isBought)
							}}
						/>
						{item.content.charAt(0).toUpperCase() + item.content.slice(1)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Card
