import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Header = () => {
	return (
		<header>
			<Link to="/">
				<h1>SWApi</h1>
			</Link>
			<Navbar />
		</header>
	);
};

export default Header;
