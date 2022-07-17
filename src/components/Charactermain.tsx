import React from 'react';

import { Character as CharacterInterface } from '../ts/interfaces';
import Charactermovies from './lists/Charactermovieslist';

type Props = {
	character: CharacterInterface;
};

const Charactermain: React.FC<Props> = ({ character }) => {
	return (
		<>
			<div className="p-4">
				<h1 className="mt-4 pb-2 text-4xl font-bold">{character.name}</h1>
				<dl className="char-dl pt-4 pb-2">
					<dt className="char-dt">Birth year</dt>
					<dd className="char-dd">{character.birth_year}</dd>
					<dt className="char-dt">Gender</dt>
					<dd className="char-dd">{character.gender}</dd>
					<dt className="char-dt">Height</dt>
					<dd className="char-dd">{character.height}cm</dd>
					<dt className="char-dt">Mass</dt>
					<dd className="char-dd">{character.mass}kg</dd>
					<dt className="char-dt">Eye color</dt>
					<dd className="char-dd">{character.eye_color}</dd>
					<dt className="char-dt">Hair color</dt>
					<dd className="char-dd">{character.hair_color}</dd>
				</dl>
			</div>
			<section>
				<h3 className="px-4 pt-2 text-xl font-bold text-zinc-600">
					Appearances
				</h3>
				<Charactermovies movies={character.films}></Charactermovies>
			</section>
		</>
	);
};

export default Charactermain;
