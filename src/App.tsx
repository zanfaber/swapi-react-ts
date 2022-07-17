import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import People from './routes/people';
import Character from './routes/character';
import Movies from './routes/movies';
import Movie from './routes/movie';
import Header from './components/ui/header';

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
