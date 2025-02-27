import { useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFindPageId from '../../../shared/hooks/useFindPageId'
import Card from '../../../shared/components/Card/Card'

// function useCreateContentInStore() {
// 	const { id } = useParams()
// 	let list = useRef(null)
// 	list.current = useFindPageId(id)
// 	const data = list.current
// 	let content = null
// 	let createAt
// 	if (list.current) {
// 		createAt = list.current.createAt
// 		content = list.current.categories.map((item, index) => {
// 			if (item.name === 'default' && item.itemsDto.length == 0) {
// 				return
// 			}
// 			return <Card key={index} data={item} idPage={id} />
// 		})
// 	}
// 	return { content, id, createAt, data }
// }

function useCreateContentInStore() {
	const { id } = useParams()
	const list = useFindPageId(id)

	const { content, createAt } = useMemo(() => {
		let content = null
		let createAt = null

		if (list) {
			createAt = list.createAt
			content = list.categories.map((item, index) => {
				if (item.name === 'default' && item.itemsDto.length === 0) {
					return null
				}
				return <Card key={index} data={item} idPage={id} />
			})
		}

		return { content, createAt }
	}, [list, id])

	return { content, id, createAt, data: list }
}

export default useCreateContentInStore
