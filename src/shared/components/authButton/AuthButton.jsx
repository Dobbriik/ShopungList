import { useTranslation } from 'react-i18next'
import styles from './authButton.module.scss'
import { Link } from 'react-router-dom'

function AuthButton() {
	const { t } = useTranslation()

	return (
		<>
			<Link className={styles.login} to='/Auth'>
				{t('Login')}
			</Link>
			<Link className={styles.regis} to='/Register'>
				{t('Register')}
			</Link>
		</>
	)
}

export default AuthButton
