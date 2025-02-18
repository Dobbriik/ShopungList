import { useEffect, useRef, useState } from 'react'

function useClickWithoutRef() {
	const dropdownRefOpenElement = useRef(null)
	const dropdownRefBtn = useRef(null)
	const [isOpen, setIsOpen] = useState(false)

	const toggleBtn = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = () => {
		setIsOpen(false)
	}

	const handleClickOutside = event => {
		if (
			dropdownRefOpenElement.current &&
			!dropdownRefOpenElement.current.contains(event.target) &&
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

	return {
		dropdownRefOpenElement,
		dropdownRefBtn,
		toggleBtn,
		isOpen,
		setIsOpen,
		handleOptionClick,
	}
}

export default useClickWithoutRef
