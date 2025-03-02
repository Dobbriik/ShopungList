import useEditItems from '../../../../../shared/hooks/useEditItems'

function useHandleClickSave(idPage) {
	const editItems = useEditItems()

	const handleClickSave = (event, idItem, refInput) => {
		const newContent = refInput.current.value
		if (idPage && idItem && newContent) {
			editItems({ idPage, idItem, newContent })
		}
	}

	return handleClickSave
}

export default useHandleClickSave
