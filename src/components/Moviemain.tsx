import React from 'react';

import { Movie as MovieInterface } from '../ts/interfaces';
import romanizeNumber from '../utils/romanizeNumber';

type Props = {
	movie: MovieInterface;
};

const Moviemain: React.FC<Props> = ({ movie }) => {
	return (
		<div className="mx-auto max-w-prose overflow-hidden p-4">
			<h1 className="mt-4 text-4xl font-bold">{movie.title}</h1>
			<h2 className="mb-4 text-2xl font-light text-zinc-500">{`Episode ${romanizeNumber(
				movie.episode_id
			)}`}</h2>
			<dl className="movie-dl">
				<dt className="movie-dt">Release date</dt>
				<dd className="movie-dd">{movie.release_date}</dd>
				<dt className="movie-dt">Director</dt>
				<dd className="movie-dd">{movie.director}</dd>
				<dt className="movie-dt">Producer</dt>
				<dd className="movie-dd">{movie.producer}</dd>
			</dl>

			<p className="text-crawl mx-auto mb-32 -mt-4 w-9/12 max-w-prose text-xl text-yellow-200 sm:mt-0 sm:mb-12">
				{movie.opening_crawl}
			</p>
		</div>
	);
};

export default Moviemain;
