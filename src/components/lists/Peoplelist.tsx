import { API_PEOPLE } from '../../api/endpoints';
import useFetch from '../../hooks/useFetch';
import Cardwrapper from '../ui/Cardwrapper';
import Card from '../ui/Card';
import Cardcharacter from '../ui/Cardcharacter';
import { Loader } from '../ui/Loader';
import simpleKeyFromUrl from '../../utils/getSimpleKey';
import getResourceId from '../../utils/getResourceId';
import { Character } from '../../ts/interfaces';

const Peoplelist: React.FC = () => {
	const { response, error, loading } = useFetch(API_PEOPLE);

	return (
		<>
			{loading && <Loader />}
			{response && response.length > 0 && (
				<>
					<h1 className="p-4 pb-2 text-4xl font-extrabold text-zinc-700">
						People
					</h1>
					<Cardwrapper>
						{response.map((character: Character) => {
							// not the best but quick
							// TODO find better solution... maybe a library?
							const key = simpleKeyFromUrl(character.url.toString());
							const characterId = getResourceId(character.url);
							return (
								<Card key={key}>
									<Cardcharacter
										name={character.name}
										url={characterId ? `/people/${characterId}` : '#'}
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

export default Peoplelist;
