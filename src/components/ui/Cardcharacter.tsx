import React from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
	name: String;
	url: To;
};

const Cardcharacter: React.FC<Props> = ({ name, url }) => {
	return (
		<div>
			<Link to={url}>{name}</Link>
		</div>
	);
};

export default Cardcharacter;
