import { useEffect, useRef, useState } from 'react'
import style from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { changeItem, postUpdateStatus } from '../../../shop/shoppingListSlice'
import { Checkbox } from 'antd'
import ChangePencil from '../changePencil/ChangePencil'
import InputText from '../input/InputText'
import usePencil from './hooks/usePencil'
import { Save } from 'lucide-react'
import useEditItems from '../../hooks/useEditItems'

function Card({ data, idPage }) {
	const [ids, setIds] = useState([])
	const [debounceTimeout, setDebounceTimeout] = useState()
	const dispatch = useDispatch()
	const [isChecked, setIsChecked] = useState(data)
	const [isHovered, setIsHovered] = useState(false)
	const refInput = useRef()
	const refSave = useRef()
	const refPencil = useRef()

	const handleChangeIds = id => {
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
		console.warn('changeItem')
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

	const { click, handleClick } = usePencil()
	const editItems = useEditItems()

	const handleClickSave = (event, idItem, refInput) => {
		const newContent = refInput.current.value
		if (idPage && idItem && newContent) {
			editItems({ idPage, idItem, newContent })
		}
	}

	const listContent = data.items.map(item => (
		<li
			key={item.id}
			id={item.id}
			className={`${style.element} ${item.isBought ? style.by : ''}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => {
				if (!click) {
					handleChangeIds(item.id)
					handleCheckboxChange(item.id, !item.isBought)
				}
			}}
		>
			<div className={`${style.content} ${click ? style.clickOn : ''}`}>
				<div className={style.text}>
					{' '}
					<Checkbox
						className={style.checkbox}
						checked={item.isBought}
						onChange={() => {
							handleChangeIds(item.id)
							handleCheckboxChange(item.id, !item.isBought)
						}}
					/>
					<h6
						className={`${style.strike} ${item.isBought ? style.byStrike : ''}`}
					>
						{item.content.charAt(0).toUpperCase() + item.content.slice(1)}
					</h6>
				</div>
			</div>
			<InputText
				ref={refInput}
				content={item.content.charAt(0).toUpperCase() + item.content.slice(1)}
				click={click}
				onBlur={handleClick}
				onSave={event => {
					handleClickSave(event, item.id, refInput)
				}}
			/>
			<div className={style.savePencil}>
				<ChangePencil
					onClick={() => {
						if (!click) {
							handleClick()
						}
					}}
				/>
			</div>
		</li>
	))

	return (
		<div className={style.container}>
			<h4 className={style.category}>{data.category}</h4>
			<ul>{listContent}</ul>
		</div>
	)
}

export default Card
