import { Outlet } from 'react-router-dom'
import Navbar from '../../shared/components/navbar/Navbar'
import styles from './Layout.module.scss'
import Wrapper from '../../shared/components/wrapper/Wrapper'

function Layout() {
	return (
		<>
			<header className={styles.header}>
				<Navbar />
			</header>
			<div className={styles.save}>
				<div className={styles.background}></div>
			</div>
			<main className={styles.back}>
				<Wrapper>
					<div className={styles.container}>
						<Outlet />
					</div>
				</Wrapper>
			</main>
		</>
	)
}

export default Layout
