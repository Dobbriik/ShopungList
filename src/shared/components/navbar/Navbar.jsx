import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ShoppingCart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function Navbar() {
	const { t, i18n } = useTranslation()
	const [btnActive, setBtnActive] = useState({ ru: false, en: false })

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}
	return (
		<div className={styles.wrap}>
			<nav className={styles.navig}>
				<div className={styles.container}>
					<ul className={styles.list}>
						<li>
							<Link className={styles.link} to='/'>
								<ShoppingCart />
								<span> </span>
								{t('Shopping list')}
							</Link>
						</li>
						<li className={styles.language}>
							<button
								className={`${styles.btn} ${btnActive.en ? styles.btnActive : ''}`}
								onClick={() => {
									setBtnActive(prev => ({ ...prev, en: true, ru: false }))
									changeLanguage('en')
								}}
							>
								en
							</button>
							<button
								className={`${styles.btn} ${btnActive.ru ? styles.btnActive : ''}`}
								onClick={() => {
									setBtnActive(prev => ({ ...prev, ru: true, en: false }))
									changeLanguage('ru')
								}}
							>
								ru
							</button>
						</li>
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
