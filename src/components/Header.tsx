import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header>
			<Link to="/">
				<span>Star Wars Api</span>
			</Link>
			<Navbar />
		</header>
	);
};

export default Header;
