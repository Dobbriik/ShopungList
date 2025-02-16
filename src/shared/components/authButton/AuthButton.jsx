import { useTranslation } from 'react-i18next'
import styles from './authButton.module.scss'
import { Link } from 'react-router-dom'

function AuthButton({ onClick }) {
	const { t } = useTranslation()

	return (
		<>
			<Link
				className={styles.login}
				to='/Auth'
				onClick={() => {
					onClick?.()
				}}
			>
				{t('Login')}
			</Link>
			<Link
				className={styles.regis}
				to='/Register'
				onClick={() => {
					onClick?.()
				}}
			>
				{t('Register')}
			</Link>
		</>
	)
}

export default AuthButton
