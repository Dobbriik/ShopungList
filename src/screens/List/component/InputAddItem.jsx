import { useTranslation } from 'react-i18next'
import style from './InputAddItem.module.scss'
import { useState } from 'react'
import { Select, Space } from 'antd'

function InputAddItem({ data, id }) {
	const { t } = useTranslation()
	const [value, setValue] = useState('')
	const [select, setSelect] = useState('')
	console.log(data)
	const handleClick = () => {
		if (value && select && value) {
			console.warn('add', id, select, value)
		}
	}

	const option = data.categories.map((item, i) => {
		return { value: item.category, label: item.category }
	})
	console.log(option)
	return (
		<div className={style.container}>
			<input
				className={style.input}
				type='text'
				value={value}
				onChange={event => setValue(event.target.value)}
			/>

			<Select
				defaultValue={t('Category')}
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
