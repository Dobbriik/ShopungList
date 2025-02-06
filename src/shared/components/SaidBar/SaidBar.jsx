import { useSelector } from 'react-redux'
import useFormattedDate from '../../hooks/useFormattedDate'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './SaidBar.module.css'
import { useEffect, useRef, useState } from 'react'
import useStartsWithLis from '../../hooks/useStartsWithLis'

function SaidBar() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const checkPath = useStartsWithLis(pathname)
	console.log(checkPath)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const options = useSelector(state => state.shoppingList.items)
	console.log(options)
	const dropdownRef = useRef(null)
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
		console.log('idPage', idPage)
		navigate(`/List/${idPage}`)
	}

	const handleClickOutside = event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
			<button className={styles.dropdownToggle} onClick={toggleDropdown}>
				{checkPath ? selectedOption || 'Select an option' : 'Select an option'}
			</button>
			{
				<ul
					className={`${styles.dropdownMenu} ${isOpen ? styles.visible : ''}`}
					ref={dropdownRef}
				>
					{options.map(({ idPage, requestId }) => (
						<li
							key={idPage}
							className={styles.dropdownOption}
							onClick={() => handleOptionClick(idPage, requestId)}
						>
							{format(requestId)}
						</li>
					))}
				</ul>
			}
		</div>
	)
}

export default SaidBar
