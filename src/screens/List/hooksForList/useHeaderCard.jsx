import { useTranslation } from 'react-i18next'
import style from '../List.module.scss'
import useFormattedDate from '../../../shared/hooks/useFormattedDate'
import { Share2, ShoppingCart } from 'lucide-react'
import useCopyUrl from './useCopyUrl'

function useHeaderCard(requestId) {
	const { handleCopy, copied } = useCopyUrl()

	const { t } = useTranslation()
	const formattedDate = useFormattedDate(requestId)

	return (
		<div className={style.header}>
			<div className={style.shop}>
				<ShoppingCart />
				<h3 className={style.title}>{t('Shopping list')}</h3>
				<p className={style.date}>{`${formattedDate}`}</p>
			</div>
			<div>
				<button className={style.btn} onClick={handleCopy}>
					<Share2
						className={`${style.copy} ${copied == 'default' ? style.default : copied == 'copied' ? style.copied : copied == 'error' ? style.copied : ''}`}
					/>
				</button>
			</div>
		</div>
	)
}

export default useHeaderCard
