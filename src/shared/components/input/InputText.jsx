import { forwardRef, useEffect, useState } from 'react'
import style from './InputText.module.scss'

const InputText = forwardRef(({ content, click, onBlur, onSave }, ref) => {
	const [value, setValue] = useState(content)
	const [change, setChange] = useState(false)
	const [saveContent, setSaveContent] = useState(content)
	const handleBlur = event => {
		if (value.trim() === '') {
			setChange('Поле не должно быть пустым!')
			alert(change)
		} else {
			setTimeout(() => {
				onBlur()
			}, 100)
			if (saveContent !== value) {
				setTimeout(() => {
					setValue(event.target.value)
					setSaveContent(event.target.value)
					setChange(true)
					onBlur()
					onSave()
				}, 100)
			}
		}
	}
	const handleChildClick = event => {
		event.stopPropagation()
	}
	useEffect(() => {
		if (click && ref.current) {
			ref.current.focus()
		}
	}, [click])
	return (
		<input
			type='text'
			value={value}
			onChange={event => {
				setValue(event.target.value)
			}}
			ref={ref}
			className={`${style.input} ${click ? style.clickOf : ''}`}
			onClick={handleChildClick}
			onBlur={handleBlur}
		/>
	)
})

export default InputText
