import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/components/navbar/Navbar';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className={styles.back}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
