import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' // Добавлено для навигации
import style from './Home.module.css'
import { postShoppingList } from '../../shop/shoppingListSlice'
import { Sparkle } from 'lucide-react'
import { Rocket } from 'lucide-react'
import Container from '../../shared/components/container/Container'
import { useTranslation } from 'react-i18next'

function Home() {
	const { t } = useTranslation()
	const [text, setText] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		if (text.trim() === '') {
			alert('Пожалуйста, введите текст')
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

	return (
		<div className={style.container}>
			<Container>
				<div className={style.create}>
					<h1 className={style.headings}>{t('Create your shopping list')}</h1>
					<p className={style.paragraph}>
						{t("Let's make shopping easier and more organized!")}
						<Sparkle className={style.star} />
					</p>
				</div>
				<textarea
					className={style.textarea}
					onChange={handleChange}
					value={text}
					onKeyPress={handleKeyPress}
					placeholder={t('Enter your shopping list...')}
				/>
				<button className={style.btn} onClick={handleClick}>
					{t('Generate a list')}
					<span>
						{' '}
						<Rocket />
					</span>
				</button>
			</Container>
		</div>
	)
}

export default Home
