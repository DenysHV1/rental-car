import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import Loader from "../Loader/Loader.jsx";

const Layout = () => {
  const setActive = ({ isActive }) =>
    isActive ? s.activeLink : s.noActiveLink;
  return (
    <>
      <header className={s.header}>
        <NavLink to="/" className={s.logo}>
          Rental<span>Car</span>
        </NavLink>
        <nav className={s.nav}>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={setActive}>
            Catalog
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <div className="container">
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
