import React, { useState, useEffect, useRef } from 'react';

import { API_MOVIES } from '../../api/endpoints';
import Cardwrapper from '../ui/Cardwrapper';
import Card from '../ui/Card';
import Cardmovie from '../ui/Cardmovie';
import { Loader } from '../ui/Loader';
import getResourceId from '../../utils/getResourceId';
import simpleKeyFromUrl from '../../utils/getSimpleKey';
import { Movie as MovieInterface } from '../../ts/interfaces';

type Props = {
	movies: String[];
};

const Charactermovies: React.FC<Props> = ({ movies }) => {
	const [allMovies, setAllMovies] = useState([] as MovieInterface[]);

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
				setAllMovies(data.results);
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
			{allMovies && allMovies.length > 0 ? (
				<Cardwrapper>
					{movies.map((movie) => {
						const movieObj = allMovies.find((o) => o.url === movie);
						const title = movieObj ? movieObj.title : movie;
						// not the best but quick
						// TODO find better solution... maybe a library?
						const key = simpleKeyFromUrl(movie.toString());
						const movieId = getResourceId(movie.toString());
						return (
							<Card key={key}>
								<Cardmovie
									title={title}
									url={movieId ? `/movies/${movieId}` : '#'}
								/>
							</Card>
						);
					})}
				</Cardwrapper>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Charactermovies;
