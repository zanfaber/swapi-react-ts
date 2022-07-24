import React from 'react';

import { API_MOVIES } from '../../api/endpoints';
import useFetch from '../../hooks/useFetch';
import Cardwrapper from '../ui/Cardwrapper';
import Card from '../ui/Card';
import Cardmovie from '../ui/Cardmovie';
import { Loader } from '../ui/Loader';
import getResourceId from '../../utils/getResourceId';
import simpleKeyFromUrl from '../../utils/getSimpleKey';
import { Movie as MovieInterface } from '../../ts/interfaces';

type Props = {
	movies: string[];
};

const Charactermovies: React.FC<Props> = ({ movies }) => {
	const { response, error, loading } = useFetch(API_MOVIES);

	return (
		<>
			{loading && <Loader />}
			{response && response.length > 0 && (
				<Cardwrapper>
					{movies.map((movie) => {
						const movieObj: MovieInterface = response.find(
							(o: MovieInterface) => o.url === movie
						);
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
			)}
		</>
	);
};

export default Charactermovies;
