import { PencilLine } from 'lucide-react'
import style from './ChangePencil.module.scss'
import useClickWithoutRef from '../../hooks/useClickWithoutRef'

function ChangePencil({ onClick = () => {} }) {
	const {
		dropdownRefOpenElement,
		dropdownRefBtn,
		toggleBtn,
		isOpen,
		setIsOpen,
		handleOptionClick,
	} = useClickWithoutRef()
	const handleChildClick = event => {
		event.stopPropagation()
		onClick()
	}
	return (
		<>
			<PencilLine className={style.changePencil} onClick={handleChildClick} />
		</>
	)
}

export default ChangePencil
