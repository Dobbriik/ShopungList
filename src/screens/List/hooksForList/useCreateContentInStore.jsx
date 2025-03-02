import { useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFindPageId from '../../../shared/hooks/useFindPageId'
// import Card from '../../../shared/components/Card/Card'
import Card from '../component/Card/Card'

function useCreateContentInStore() {
	const { id } = useParams()
	const list = useFindPageId(id)

	const { content, createAt } = useMemo(() => {
		let content = null
		let createAt = null

		if (list) {
			createAt = list.createAt
			content = list.categories.map((item, index) => {
				if (item.itemsDto.length === 0) {
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
