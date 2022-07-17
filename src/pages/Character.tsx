import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/ui/Loader';

import { Character as CharacterInterface } from '../ts/interfaces';
import Charactermain from '../components/Charactermain';

export default function Movie() {
	const { id: characterId } = useParams();
	const [character, setCharacter] = useState({} as CharacterInterface);

	// to prevent response if unmounted before commpleting fetch...
	const cancelRequest = useRef<boolean>(false);
	useEffect(() => {
		cancelRequest.current = false;

		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://swapi.dev/api/people/${characterId}`
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				if (cancelRequest.current) return;
				setCharacter(data);
			} catch (error) {
				if (cancelRequest.current) return;
			}
		};
		fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, [characterId]);

	return (
		<>
			{Object.keys(character).length > 0 ? (
				<Charactermain character={character} />
			) : (
				<Loader />
			)}
		</>
	);
}
