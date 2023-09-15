import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './sharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.header_nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav_link
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav_link
            }
            to="/catalog"
          >
            Catalog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav_link
            }
            to="/favorites"
          >
                Favorites
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
