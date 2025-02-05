function Card({ data }) {
	console.log('data', data)
	return (
		<div>
			<h3>{data.category}</h3>
			<ul>
				{data.items.map(item => (
					<li key={item.id}>{item.content}</li>
				))}
			</ul>
		</div>
	)
}

export default Card
