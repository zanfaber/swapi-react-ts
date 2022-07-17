import { useEffect, useState, useRef } from 'react';
import { Loader } from '../ui/Loader';
import { Movie } from '../../ts/interfaces';

import simpleKeyFromUrl from '../../utils/simpleKey';

const Movieslist = () => {
	const [movies, setMovies] = useState([] as Movie[]);

	// to prevent response if unmounted before commpleting fetch...
	const cancelRequest = useRef<boolean>(false);

	useEffect(() => {
		cancelRequest.current = false;

		const fetchData = async () => {
			try {
				const response = await fetch('https://swapi.dev/api/films/');
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				if (cancelRequest.current) return;
				setMovies(data.results);
			} catch (error) {
				if (cancelRequest.current) return;
			}
		};
		fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, []);

	return (
		<>
			{movies && movies.length > 0 ? (
				<ul>
					{movies.map((movie) => {
						// not the best but quick
						// TODO find better solution... maybe a library?
						const key = simpleKeyFromUrl(movie.url);
						return (
							<li key={key}>
								<h2>{movie.title}</h2>
							</li>
						);
					})}
				</ul>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Movieslist;
