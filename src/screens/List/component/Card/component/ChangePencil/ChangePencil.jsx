import { PencilLine } from 'lucide-react'
import style from './ChangePencil.module.scss'

function ChangePencil({ onClick = () => {} }) {
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
