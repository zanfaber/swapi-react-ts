import React from 'react';

import { Movie as MovieInterface } from '../ts/interfaces';

type Props = {
	movie: MovieInterface;
};

const Moviemain: React.FC<Props> = ({ movie }) => {
	return (
		<div>
			<h1>{movie.title}</h1>
			<h2>{`Episode ${movie.episode_id}`}</h2>
			<dl>
				<dt>Release date</dt>
				<dd>{movie.release_date}</dd>
				<dt>Director</dt>
				<dd>{movie.director}</dd>
				<dt>Producer</dt>
				<dd>{movie.producer}</dd>
			</dl>
			<h3>Opening crawl</h3>
			<p>{movie.opening_crawl}</p>
		</div>
	);
};

export default Moviemain;
