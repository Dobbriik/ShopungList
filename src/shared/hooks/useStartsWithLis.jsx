function useStartsWithLis(word) {
	const pattern = /^\/List\//
	return pattern.test(word)
}

export default useStartsWithLis
