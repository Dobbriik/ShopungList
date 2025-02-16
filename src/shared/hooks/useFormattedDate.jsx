import moment from 'moment'

function useFormattedDate(data) {
	const formattedDate = moment(data).format('DD.MM.YYYY')
	return formattedDate
}

export default useFormattedDate
