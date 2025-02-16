import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' // Добавлено для навигации
import style from './Home.module.scss'
import { postShoppingList } from '../../shop/shoppingListSlice'
import { Sparkle } from 'lucide-react'
import { Rocket } from 'lucide-react'
import Container from '../../shared/components/container/Container'
import { useTranslation } from 'react-i18next'
import useClickForPost from './hooksForHome/useClickForPost'

function Home() {
	const { t } = useTranslation()
	const { handleChange, handleKeyPress, handleClick, text } = useClickForPost()

	return (
		<Container>
			<div className={style.create}>
				<h1 className={style.headings}>{t('Create your shopping list')}</h1>
				<p className={style.paragraph}>
					{t(
						'Achieve a more efficient and organized shopping process effortlessly!'
					)}
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
	)
}

export default Home
