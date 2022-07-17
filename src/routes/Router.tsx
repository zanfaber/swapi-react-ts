import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import People from '../pages/People';
import Character from '../pages/Character';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="people" element={<People />} />
			<Route path="people/:id" element={<Character />} />
			<Route path="movies" element={<Movies />} />
			<Route path="movies/:id" element={<Movie />} />
		</Routes>
	);
};

export default Router;
