import { useSelector } from 'react-redux'
import useFormattedDate from '../../hooks/useFormattedDate'
import { Link, useLocation, useParams } from 'react-router-dom'
import styles from './SaidBar.module.css'
import { useEffect, useRef, useState } from 'react'
import useStartsWithLis from '../../hooks/useStartsWithLis'

function SaidBar() {
	const { pathname } = useLocation()
	const checkPath = useStartsWithLis(pathname)
	console.log(checkPath)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const options = useSelector(state => state.shoppingList.items)
	const dropdownRef = useRef(null)
	const format = useFormattedDate

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = option => {
		setSelectedOption(option)
		setIsOpen(false)
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
			{isOpen && (
				<ul className={styles.dropdownMenu} ref={dropdownRef}>
					{options.map(({ idPage, createdAt }) => (
						<li
							key={idPage}
							className={styles.dropdownOption}
							onClick={() => handleOptionClick(format(createdAt))}
						>
							<Link className={styles.link} to={`/List/${idPage}`}>
								{format(createdAt)}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SaidBar
