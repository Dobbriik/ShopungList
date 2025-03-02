import style from './Card.module.scss'
import ItemElement from './ItemElement'
import { useTranslation } from 'react-i18next'

function Card({ data, idPage }) {
	const { t } = useTranslation()
	const listContent = data.itemsDto.map((item, i) => {
		return <ItemElement key={i} idPage={idPage} item={item} data={data} />
	})

	return (
		<div className={style.container}>
			<h4 className={style.category}>
				{data.name !== 'default' ? data.name : t('default')}
			</h4>
			<ul>{listContent}</ul>
		</div>
	)
}

export default Card
