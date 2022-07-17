import { useEffect, useState, useRef } from 'react';
import { Loader } from '../ui/Loader';
import { Character } from '../../ts/interfaces';

import simpleKeyFromUrl from '../../utils/simpleKey';

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
				<ul>
					{people.map((character) => {
						// not the best but quick
						// TODO find better solution... maybe a library?
						const key = simpleKeyFromUrl(character.url);
						return (
							<li key={key}>
								<h2>{character.name}</h2>
							</li>
						);
					})}
				</ul>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Peoplelist;
