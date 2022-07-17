import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import People from './routes/People';
import Character from './routes/Character';
import Movies from './routes/Movies';
import Movie from './routes/Movie';
import Header from './components/Header';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="people" element={<People />} />
				<Route path="people/:id" element={<Character />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:id" element={<Movie />} />
			</Routes>
		</>
	);
}

export default App;
