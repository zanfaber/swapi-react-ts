import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { API_MOVIE } from '../api/endpoints';
import Moviemain from '../components/Moviemain';
import { Loader } from '../components/ui/Loader';
import { Movie as MovieInterface } from '../ts/interfaces';

export default function Movie() {
	const { id: movieId } = useParams();
	const [movie, setMovie] = useState({} as MovieInterface);

	// to prevent response if unmounted before commpleting fetch...
	const cancelRequest = useRef<boolean>(false);
	useEffect(() => {
		cancelRequest.current = false;

		const fetchData = async () => {
			try {
				const response = await fetch(`${API_MOVIE}${movieId}`);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				if (cancelRequest.current) return;
				setMovie(data);
			} catch (error) {
				if (cancelRequest.current) return;
			}
		};
		fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, [movieId]);

	return (
		<>
			{Object.keys(movie).length > 0 ? <Moviemain movie={movie} /> : <Loader />}
		</>
	);
}
