import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function useNavigateHome(redirectPath = '/') {
	const navigate = useNavigate()

	useEffect(() => {
		const handlePopState = () => {
			navigate(redirectPath, { replace: true })
		}

		window.addEventListener('popstate', handlePopState)

		return () => {
			window.removeEventListener('popstate', handlePopState)
		}
	}, [navigate, redirectPath])
	return
}

export default useNavigateHome
