import { useTranslation } from 'react-i18next'
import style from './InputAddItem.module.scss'
import { useState } from 'react'
import { Select } from 'antd'
import { CirclePlus, Citrus } from 'lucide-react'

function InputAddItem({ data, id, addNewItem }) {
	const { t } = useTranslation()
	const [value, setValue] = useState('')
	const [select, setSelect] = useState(t('Category'))
	const [red, setRed] = useState({ input: false, select: false })
	const handleClick = () => {
		if (select === t('Category')) {
			setRed(pref => ({ ...pref, select: true }))
			setTimeout(() => {
				setRed(pref => ({ ...pref, select: false }))
			}, 2000)
		}
		if (value.trim().length == 0) {
			setRed(pref => ({ ...pref, input: true }))
			setTimeout(() => {
				setRed(pref => ({ ...pref, input: false }))
			}, 2000)
		}

		if (value.trim().length !== 0 && select !== t('Category')) {
			console.warn('select, value, id', select, value, id)
			addNewItem(select, value, id)
			setValue('')
			setSelect(t('Category'))
		}
	}
	let option = []
	if (data) {
		option = data.categories.map((item, i) => {
			let labelDefault = item.name
			if (item.name === 'default') {
				labelDefault = t('Other')
			}
			return { value: item.id, label: labelDefault }
		})
	}

	return (
		<div
			className={`${style.container} ${red.input ? style.inputRed : ''}  ${red.select ? style.selectRed : ''} `}
		>
			<input
				placeholder={t('add a new product to the category...')}
				className={`${style.input}  `}
				type='text'
				value={value}
				onChange={event => setValue(event.target.value)}
			/>

			<div className={`${style.wrap}  `}>
				<p className={`${style.text}  `}>
					<Citrus />
				</p>
				<Select
					value={select}
					name=''
					id=''
					className={`${style.select}  `}
					options={option}
					onChange={value => {
						setSelect(value)
					}}
				/>

				<button className={style.btn} onClick={handleClick}>
					{t('Add')}
				</button>
			</div>
		</div>
	)
}

export default InputAddItem
