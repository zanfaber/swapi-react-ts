import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className=" flex justify-between bg-zinc-900 p-4">
			<Link
				to="/"
				className="flex items-center rounded outline-0 ring-yellow-400 focus:ring-1">
				<span className="text-xl font-semibold">Star Wars Api</span>
			</Link>
			<Navbar />
		</header>
	);
};

export default Header;
