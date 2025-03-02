import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postShoppingList } from '../../../shop/shoppingListSlice'
import { useTranslation } from 'react-i18next'

function useClickForPost() {
	const { t } = useTranslation()
	const [text, setText] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		if (text.trim() === '') {
			alert(
				t('Please enter the names of the products, their quantity or weight.')
			)
			return
		}
		dispatch(postShoppingList(text))
		setText('')
		navigate('/List')
	}

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			handleClick()
		}
	}

	const handleChange = event => {
		setText(event.target.value)
	}
	return { handleChange, handleKeyPress, handleClick, text }
}

export default useClickForPost
