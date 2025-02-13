import { useTranslation } from 'react-i18next'
import styles from './languageSettings.module.scss'
import { useState } from 'react'

function LanguageSettings({ onClick }) {
	const { i18n } = useTranslation()
	const [btnActive, setBtnActive] = useState({ ru: false, en: false })
	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	return (
		<div className={styles.language}>
			<button
				className={`${styles.btn} ${btnActive.en ? styles.btnActive : ''}`}
				onClick={() => {
					setBtnActive(prev => ({ ...prev, en: true, ru: false }))
					changeLanguage('en')
					onClick?.()
				}}
			>
				en
			</button>
			<button
				className={`${styles.btn} ${btnActive.ru ? styles.btnActive : ''}`}
				onClick={() => {
					setBtnActive(prev => ({ ...prev, ru: true, en: false }))
					changeLanguage('ru')
					onClick?.()
				}}
			>
				ru
			</button>
		</div>
	)
}

export default LanguageSettings
