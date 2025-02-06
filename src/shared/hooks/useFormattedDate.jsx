import moment from 'moment'

function useFormattedDate(data) {
	const formattedDate = moment(data).format('DD.MM.YYYY HH:mm:ss')
	return formattedDate
}

export default useFormattedDate
