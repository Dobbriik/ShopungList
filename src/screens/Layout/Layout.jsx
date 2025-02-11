import { Outlet } from 'react-router-dom'
import Navbar from '../../shared/components/navbar/Navbar'
import styles from './Layout.module.scss'

function Layout() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className={styles.back}>
				<div className={styles.container}>
					<Outlet />
				</div>
			</main>
		</>
	)
}

export default Layout
