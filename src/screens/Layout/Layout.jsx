import { Outlet } from 'react-router-dom'
import Navbar from '../../shared/components/navbar/Navbar'
import styles from './Layout.module.css'
import SaidBar from '../../shared/components/SaidBar/SaidBar'

function Layout() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className={styles.back}>
				<div className={styles.container}>
					<SaidBar />
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export default Layout
