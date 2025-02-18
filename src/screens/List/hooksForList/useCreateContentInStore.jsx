import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFindPageId from '../../../shared/hooks/useFindPageId'
import Card from '../../../shared/components/Card/Card'

function useCreateContentInStore() {
	const { id } = useParams()
	let list = useRef(null)
	list.current = useFindPageId(id)
	let content = null
	let createAt
	if (list.current) {
		createAt = list.current.createAt
		content = list.current.categories.map((item, index) => (
			<Card key={index} data={item} idPage={id} />
		))
	}
	return { content, createAt }
}

export default useCreateContentInStore
