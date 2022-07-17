import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						to="people"
						className={({ isActive }) => (isActive ? 'active' : '')}>
						People
					</NavLink>
				</li>
				<li>
					<NavLink
						to="movies"
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Movies
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
