import { useSelector } from 'react-redux'
import useFormattedDate from '../../hooks/useFormattedDate'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from './SaidBar.module.css'
import { useEffect, useRef, useState } from 'react'
import useStartsWithLis from '../../hooks/useStartsWithLis'
import { useTranslation } from 'react-i18next'

function SidBar() {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { id } = useParams()
	const checkPath = useStartsWithLis(pathname)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const options = useSelector(state => state.shoppingList.items)
	const dropdownRef = useRef(null)
	const dropdownRefBtn = useRef(null)
	const format = useFormattedDate

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}
	useEffect(() => {
		console.log('selectedOption', selectedOption)
		if (!checkPath) {
			setSelectedOption(null)
		}
	}, [checkPath])

	const handleOptionClick = (idPage, requestId) => {
		setSelectedOption(format(requestId))
		setIsOpen(false)
		navigate(`/List/${idPage}`)
	}

	const handleClickOutside = event => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target) &&
			dropdownRefBtn.current &&
			!dropdownRefBtn.current.contains(event.target)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return (
		<div className={styles.dropdown}>
			<button
				ref={dropdownRefBtn}
				className={`${styles.dropdownToggle} ${isOpen ? styles.dropdownToggleActive : ''}`}
				onClick={toggleDropdown}
			>
				{checkPath ? selectedOption || t('Select Cart') : t('Select Cart')}
			</button>
			{
				<div className={`${styles.grid} ${isOpen ? styles.visible : ''}`}>
					<ul
						className={`${styles.dropdownMenu} ${isOpen ? styles.visibleMenu : ''}`}
					>
						{options.map(({ idPage, requestId }, i) => (
							<li
								ref={dropdownRef}
								key={i}
								id={idPage}
								className={`${styles.dropdownOption} ${id == idPage ? styles.target : ''}`}
								onClick={() => handleOptionClick(idPage, requestId)}
							>
								{format(requestId)}
							</li>
						))}
					</ul>
				</div>
			}
		</div>
	)
}

export default SidBar
