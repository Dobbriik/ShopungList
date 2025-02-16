import { useSelector } from 'react-redux'
import useFormattedDate from '../../hooks/useFormattedDate'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from './SaidBar.module.scss'
import { useEffect, useRef, useState } from 'react'
import useStartsWithLis from '../../hooks/useStartsWithLis'
import { useTranslation } from 'react-i18next'
import useClickWithoutRef from '../../hooks/useClickWithoutRef'

function SidBar() {
	const {
		dropdownRefOpenElement,
		dropdownRefBtn,
		toggleBtn,
		isOpen,
		setIsOpen,
	} = useClickWithoutRef()

	const { t } = useTranslation()
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { id } = useParams()
	const checkPath = useStartsWithLis(pathname)
	const [selectedOption, setSelectedOption] = useState(null)
	const options = useSelector(state => state.shoppingList.items)
	const format = useFormattedDate

	useEffect(() => {
		if (!checkPath) {
			setSelectedOption(null)
		}
	}, [checkPath])

	const handleOptionClick = (idPage, requestId) => {
		setSelectedOption(format(requestId))
		setIsOpen(false)
		navigate(`/List/${idPage}`)
	}

	return (
		<div className={`${styles.containerDropdown}`}>
			<div className={styles.dropdown}>
				<button
					ref={dropdownRefBtn}
					className={`${styles.dropdownToggle} ${options.length !== 0 && isOpen ? styles.dropdownToggleActiveTrue : ''} ${isOpen ? styles.dropdownToggleActive : ''}`}
					onClick={toggleBtn}
				>
					{checkPath ? selectedOption || t('Select Cart') : t('Select Cart')}
				</button>
				{
					<div className={`${styles.grid} ${isOpen ? styles.visible : ''}`}>
						<ul className={`${styles.dropdownMenu} `}>
							{options.map(({ idPage, createdAt }, i) => (
								<li
									ref={dropdownRefOpenElement}
									key={i}
									id={idPage}
									className={`${styles.dropdownOption} ${id == idPage ? styles.target : ''}`}
									onClick={() => handleOptionClick(idPage, createdAt)}
								>
									<p className={styles.format}>{format(createdAt)}</p>
								</li>
							))}
						</ul>
					</div>
				}
			</div>
		</div>
	)
}

export default SidBar
