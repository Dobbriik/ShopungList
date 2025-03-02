import { Trash2 } from 'lucide-react'
import style from './Trash.module.scss'

function Trash({ click, onClick }) {
	const handleClick = event => {
		event.stopPropagation()
		onClick()
	}

	return (
		<Trash2
			className={`${!click ? style.trash : style.trashOff}`}
			onClick={handleClick}
		/>
	)
}

export default Trash
