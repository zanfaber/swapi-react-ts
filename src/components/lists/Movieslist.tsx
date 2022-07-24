import { API_MOVIES } from '../../api/endpoints';
import useFetch from '../../hooks/useFetch';
import simpleKeyFromUrl from '../../utils/getSimpleKey';
import getResourceId from '../../utils/getResourceId';
import Cardwrapper from '../ui/Cardwrapper';
import Card from '../ui/Card';
import Cardmovie from '../ui/Cardmovie';
import { Loader } from '../ui/Loader';
import { Movie } from '../../ts/interfaces';

const Movieslist: React.FC = () => {
	const { response, error, loading } = useFetch(API_MOVIES);

	return (
		<>
			{loading && <Loader />}
			{response && response.length > 0 && (
				<>
					<h1 className="p-4 pb-2 text-4xl font-extrabold text-zinc-700">
						Movies
					</h1>
					<Cardwrapper>
						{response.map((movie: Movie) => {
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
			)}
		</>
	);
};

export default Movieslist;
