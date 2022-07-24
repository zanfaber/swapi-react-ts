import { useEffect, useState, useRef } from 'react';
import { Loader } from '../ui/Loader';
import { Movie } from '../../ts/interfaces';

import simpleKeyFromUrl from '../../utils/getSimpleKey';
import getResourceId from '../../utils/getResourceId';
import Cardwrapper from '../ui/Cardwrapper';
import Card from '../ui/Card';
import Cardmovie from '../ui/Cardmovie';
import { API_MOVIES } from '../../api/endpoints';

const Movieslist = () => {
	const [movies, setMovies] = useState([] as Movie[]);

	// to prevent response if unmounted before commpleting fetch...
	const cancelRequest = useRef<boolean>(false);
	useEffect(() => {
		cancelRequest.current = false;

		const fetchData = async () => {
			try {
				const response = await fetch(API_MOVIES);
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
				<>
					<h1 className="p-4 pb-2 text-4xl font-extrabold text-zinc-700">
						Movies
					</h1>
					<Cardwrapper>
						{movies.map((movie) => {
							// not the best but quick
							// TODO find better solution... maybe a library?
							const key = simpleKeyFromUrl(movie.url.toString());
							const movieId = getResourceId(movie.url);
							return (
								<Card key={key}>
									<Cardmovie
										title={movie.title}
										url={movieId ? `/movies/${movieId}` : '#'}
									/>
								</Card>
							);
						})}
					</Cardwrapper>
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Movieslist;
