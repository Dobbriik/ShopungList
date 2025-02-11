import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Menu, ShoppingCart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LanguageSettings from '../languageSettings/languageSettings'
import AuthButton from '../authButton/authButton'
import Wrapper from '../wrapper/Wrapper'

function Navbar() {
	const { t } = useTranslation()
	const [btnActive, setBtnActive] = useState(false)
	const navigate = useNavigate()

	const handleClickBurger = () => {
		setBtnActive(!btnActive)
	}

	const handleClickToHome = () => {
		navigate('/')
	}
	return (
		<div className={styles.wrap}>
			<div className={styles.background}></div>
			<Wrapper>
				<nav className={styles.navig}>
					<ul className={styles.list}>
						<li>
							<h3 className={styles.link} onClick={handleClickToHome}>
								<ShoppingCart className={styles.cart} />
								<span> </span>
								{t('Shopping list')}
							</h3>
						</li>
						<div className={` ${styles.language} ${styles.settings}`}>
							<LanguageSettings />
						</div>

						<li className={`${styles.auth} ${styles.settings}`}>
							<AuthButton />
						</li>
						<Menu
							className={styles.burger}
							onClick={() => {
								handleClickBurger()
							}}
						></Menu>
						<div
							className={`${styles.menu} ${btnActive ? styles.menuActive : ''}`}
						>
							<AuthButton />
							<LanguageSettings />
						</div>
					</ul>
				</nav>
			</Wrapper>
		</div>
	)
}

export default Navbar
