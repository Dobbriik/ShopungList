import { useEffect, useRef, useState } from 'react'

function useCheckLocale(id) {
	const [hasValue, setHasValue] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const item = useRef(null)

	useEffect(() => {
		setIsLoading(true)
		try {
			if (typeof window === 'undefined' || !window.localStorage) {
				throw new Error('LocalStorage недоступен')
			}
			const storedItem = localStorage.getItem(id)
			item.current = storedItem ? JSON.parse(storedItem) : null
			setHasValue(item.current !== null)
		} catch (err) {
			setError(err.message)
			console.error('Ошибка:', err)
		} finally {
			setIsLoading(false)
		}
	}, [id])

	const result = item.current
	return { hasValue, isLoading, error, result }
}

export default useCheckLocale
