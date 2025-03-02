import { useState } from 'react'

function usePencil() {
	const [click, setClick] = useState(false)

	const handleClick = () => {
		setClick(!click)
	}

	return { click, handleClick }
}

export default usePencil
