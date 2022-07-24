import { useParams } from 'react-router-dom';

import { API_CHARACTER } from '../api/endpoints';
import Charactermain from '../components/Charactermain';
import { Loader } from '../components/ui/Loader';
import useFetch from '../hooks/useFetch';

export default function Movie() {
	const { id: characterId } = useParams();

	//
	const { response, error, loading } = useFetch(
		`${API_CHARACTER}${characterId}`
	);

	return (
		<>
			{loading && <Loader />}
			{response && <Charactermain character={response} />}
		</>
	);
}
