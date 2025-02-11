import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ShoppingCart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LanguageSettings from '../languageSettings/languageSettings'

function Navbar() {
	const { t, i18n } = useTranslation()
	const [btnActive, setBtnActive] = useState({ ru: false, en: false })
	const navigate = useNavigate()
	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	const handleClickToHome = () => {
		navigate('/')
	}
	return (
		<div className={styles.wrap}>
			<nav className={styles.navig}>
				<div className={styles.container}>
					<ul className={styles.list}>
						<li>
							<h3 className={styles.link} onClick={handleClickToHome}>
								<ShoppingCart className={styles.cart} />
								<span> </span>
								{t('Shopping list')}
							</h3>
						</li>
						<LanguageSettings />
						<li className={styles.auth}>
							<Link to='/Auth'>{t('Login')}</Link>
							<Link className={styles.regis} to='/Register'>
								{t('Register')}
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
