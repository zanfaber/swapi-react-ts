import { useEffect, useState, useRef } from 'react';
import { Loader } from '../ui/Loader';
import { Character } from '../../ts/interfaces';

import simpleKeyFromUrl from '../../utils/getSimpleKey';
import getResourceId from '../../utils/getResourceId';
import Cardwrapper from '../ui/Cardwrapper';
import Card from '../ui/Card';
import Cardcharacter from '../ui/Cardcharacter';

const Peoplelist = () => {
	const [people, setPeople] = useState([] as Character[]);

	// to prevent response if unmounted before commpleting fetch...
	const cancelRequest = useRef<boolean>(false);

	useEffect(() => {
		cancelRequest.current = false;

		const fetchData = async () => {
			try {
				const response = await fetch('https://swapi.dev/api/people/');
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				if (cancelRequest.current) return;
				setPeople(data.results);
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
			{people && people.length > 0 ? (
				<>
					<h1>People</h1>
					<Cardwrapper>
						{people.map((character) => {
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
			) : (
				<Loader />
			)}
		</>
	);
};

export default Peoplelist;
