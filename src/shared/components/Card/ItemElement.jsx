import { useEffect, useRef, useState } from 'react'
import usePencil from './hooks/usePencil'
import style from './ItemElement.module.scss'
import ChangePencil from '../changePencil/ChangePencil'
import InputText from '../input/InputText'
import { Checkbox } from 'antd'
import useHandleClickSave from './hooksItem/useHandleClickSave'
import useToggleStatus from './hooksItem/useToggleStatus'
import { useDispatch } from 'react-redux'
import { postUpdateStatus } from '../../../shop/shoppingListSlice'

function ItemElement({ idPage, item, data }) {
	const text = item.content.charAt(0).toUpperCase() + item.content.slice(1)
	const refInput = useRef()
	const dispatch = useDispatch()
	const { click, handleClick } = usePencil()
	const [debounceTimeout, setDebounceTimeout] = useState()
	const handleClickSave = useHandleClickSave(idPage)
	const { handleChangeIds, handleCheckboxChange, ids, setIds } =
		useToggleStatus(idPage, data)

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
		<li
			className={`${style.element} ${item.isBought ? style.by : ''}`}
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
						onClick={event => {
							event.stopPropagation()
						}}
					/>
					<h6
						className={`${style.strike} ${item.isBought ? style.byStrike : ''}`}
					>
						{text}
					</h6>
				</div>
			</div>
			<InputText
				ref={refInput}
				content={text}
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
	)
}

export default ItemElement
