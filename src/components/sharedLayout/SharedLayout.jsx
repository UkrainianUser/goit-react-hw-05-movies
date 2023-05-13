import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Suspense } from "react";
import Loader from "components/loader/Loader";

export const SharedLayout = () => {
	return (
		<>
		<header>
			<div className={css.container}>
				<ul className={css.nav}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
			</div>
		</header>
		<main>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</main>
		</>
	);
};

