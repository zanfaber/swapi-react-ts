import { useParams } from 'react-router-dom';

import { API_MOVIE } from '../api/endpoints';
import Moviemain from '../components/Moviemain';
import { Loader } from '../components/ui/Loader';
import useFetch from '../hooks/useFetch';

export default function Movie() {
	const { id: movieId } = useParams();

	// to prevent response if unmounted before commpleting fetch...
	const { response, error, loading } = useFetch(`${API_MOVIE}${movieId}`);

	return (
		<>
			{loading && <Loader />}
			{response && <Moviemain movie={response} />}
		</>
	);
}
