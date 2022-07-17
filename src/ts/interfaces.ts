import { To } from 'react-router-dom';

interface Character {
	name: String;
	height: String;
	mass: String;
	hair_color: String;
	skin_color: String;
	eye_color: String;
	birth_year: String;
	gender: String;
	homeworld: String;
	films: Array<String>;
	species: Array<String>;
	vehicles: Array<String>;
	starships: Array<String>;
	created: String;
	edited: String;
	url: To;
}

interface Movie {
	title: String;
	episode_id: number;
	opening_crawl: String;
	director: String;
	producer: String;
	release_date: String;
	characters: Array<String>;
	planets: Array<String>;
	starships: Array<String>;
	vehicles: Array<String>;
	species: Array<String>;
	created: String;
	edited: String;
	url: To;
}

export type { Character, Movie };
