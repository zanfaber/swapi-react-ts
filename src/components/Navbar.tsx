import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul className="flex h-full gap-4">
				<li className=" h-full">
					<NavLink
						to="people"
						className={({ isActive }) =>
							isActive
								? 'flex h-full items-center rounded text-yellow-300 outline-0 ring-yellow-400 focus:ring-1'
								: 'flex h-full items-center rounded outline-0 ring-yellow-400 hover:opacity-75 focus:opacity-75 focus:ring-1'
						}>
						People
					</NavLink>
				</li>
				<li>
					<NavLink
						to="movies"
						className={({ isActive }) =>
							isActive
								? 'flex h-full items-center rounded text-yellow-300 outline-0 ring-yellow-400 focus:ring-1'
								: 'flex h-full items-center rounded outline-0 ring-yellow-400 hover:opacity-75 focus:opacity-75 focus:ring-1'
						}>
						Movies
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
