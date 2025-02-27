import { useTranslation } from 'react-i18next'
import style from './InputAddItem.module.scss'
import { useState } from 'react'
import { Select } from 'antd'

function InputAddItem({ data, id, addNewItem }) {
	const { t } = useTranslation()
	const [value, setValue] = useState('')
	const [select, setSelect] = useState(t('Category'))
	const handleClick = () => {
		if (value && select) {
			console.warn('add', select, value)
			addNewItem(select, value)
			setValue('')
			setSelect(t('Category'))
		}
	}
	let option = []
	if (data) {
		option = data.categories.map((item, i) => {
			return { value: item.id, label: item.name }
		})
	}

	return (
		<div className={style.container}>
			<input
				className={style.input}
				type='text'
				value={value}
				onChange={event => setValue(event.target.value)}
			/>

			<Select
				value={select}
				name=''
				id=''
				className={style.select}
				options={option}
				onChange={value => {
					setSelect(value)
				}}
			/>

			<button className={style.btn} onClick={handleClick}>
				{t('Add')}
			</button>
		</div>
	)
}

export default InputAddItem
