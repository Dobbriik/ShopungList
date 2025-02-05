import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ShoppingCart } from 'lucide-react'

function Navbar() {
	return (
		<div className={styles.wrap}>
			<nav className={styles.navig}>
				<div className={styles.container}>
					<ul className={styles.list}>
						<li>
							<Link className={styles.link} to='/'>
								<ShoppingCart />
								<span> </span>
								Список покупок
							</Link>
						</li>
						<li className={styles.auth}>
							<Link to='/Auth'>Войти</Link>
							<Link className={styles.regis} to='/Register'>
								Зарегистрироваться
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
