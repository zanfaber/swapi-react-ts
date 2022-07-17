import React from 'react';

import { Character as CharacterInterface } from '../ts/interfaces';
import Charactermovies from './lists/Charactermovieslist';

type Props = {
	character: CharacterInterface;
};

const Charactermain: React.FC<Props> = ({ character }) => {
	console.log(character);
	return (
		<div>
			<h1>{character.name}</h1>
			<dl>
				<dt>Birth year</dt>
				<dd>{character.birth_year}</dd>
				<dt>Gender</dt>
				<dd>{character.gender}</dd>
				<dt>Height</dt>
				<dd>{character.height}cm</dd>
				<dt>Mass</dt>
				<dd>{character.mass}kg</dd>
				<dt>Eye color</dt>
				<dd>{character.eye_color}</dd>
				<dt>Hair color</dt>
				<dd>{character.hair_color}</dd>
			</dl>
			<h3>Appearances:</h3>
			<Charactermovies movies={character.films}></Charactermovies>
		</div>
	);
};

export default Charactermain;
