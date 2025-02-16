function filterDefault(data) {
	function check(value) {
		return value.items.length !== 0
	}

	const list = data.filter(check)

	return list
}

export default filterDefault
