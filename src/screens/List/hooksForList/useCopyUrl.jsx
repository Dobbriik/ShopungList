import { useState } from 'react'

function useCopyUrl() {
	const currentUrl = window.location.href
	const [copied, setCopied] = useState('default')

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(currentUrl)
			setCopied('copied')
			setTimeout(() => setCopied('default'), 2000)
		} catch (err) {
			setCopied('error')
			setTimeout(() => setCopied('default'), 2000)
			console.error('Не удалось скопировать текст: ', err)
		}
	}
	return { handleCopy, copied }
}

export default useCopyUrl
