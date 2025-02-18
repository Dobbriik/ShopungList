import { Menu } from 'lucide-react'
import useClickWithoutRef from '../../hooks/useClickWithoutRef'
import styles from './BurgerMenu.module.scss'
<<<<<<< HEAD
import AuthButton from '../authButton/authButton'
import LanguageSettings from '../languageSettings/languageSettings'
=======
import AuthButton from '../authButton/AuthButton'
import LanguageSettings from '../languageSettings/LanguageSettings'
>>>>>>> upstream/main

function BurgerMenu() {
	const {
		dropdownRefOpenElement,
		dropdownRefBtn,
		toggleBtn,
		isOpen,
		setIsOpen,
		handleOptionClick,
	} = useClickWithoutRef()

	return (
		<>
			<Menu
				className={`${styles.menu} `}
				onClick={toggleBtn}
				ref={dropdownRefBtn}
			></Menu>
			<div
				className={`${styles.background} ${isOpen ? styles.backgroundActive : ''}`}
			>
				<div
					className={`${styles.container} ${isOpen ? styles.containerOpen : ''}`}
					ref={dropdownRefOpenElement}
				>
					<AuthButton
						className={`${styles.element}`}
						onClick={() => {
							handleOptionClick()
						}}
					/>
					<div className={`${styles.element}`}>
						<p>language: </p>
						<LanguageSettings
							className={`${styles.element}`}
							onClick={() => {
								handleOptionClick()
							}}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default BurgerMenu
