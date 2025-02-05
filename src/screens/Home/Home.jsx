import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' // Добавлено для навигации
import style from './Home.module.css'
import { postShoppingList } from '../../shop/shoppingListSlice'
import { Sparkle } from 'lucide-react'
import { Rocket } from 'lucide-react'

function Home() {
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

	const handleChange = event => {
		setText(event.target.value)
	}

	return (
		<div className={style.container}>
			<div className={style.create}>
				<h1 className={style.headings}>Создайте свой список покупок</h1>
				<p className={style.paragraph}>
					Давайте сделаем покупки проще и организованнее!
					<Sparkle className={style.star} />
				</p>
			</div>
			<textarea
				className={style.textarea}
				onChange={handleChange}
				value={text}
				placeholder='Введите ваш список покупок...'
			></textarea>
			<button className={style.btn} onClick={handleClick}>
				Сгенерировать список
				<span>
					{' '}
					<Rocket />
				</span>
			</button>
		</div>
	)
}

export default Home
