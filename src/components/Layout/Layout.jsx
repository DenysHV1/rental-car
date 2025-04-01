import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css'

const Layout = () => {
	const setActive = ({ isActive }) => isActive ? s.activeLink : s.noActiveLink;
  return (
    <>
      <header className={s.header}>
        <NavLink to="/" className={s.logo}>
          Rental<span>Car</span>
        </NavLink>
        <nav className={s.nav}>
          <NavLink to="/" className={setActive}>Home</NavLink>
          <NavLink to="/catalog" className={setActive}>Catalog</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
