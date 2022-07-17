import React from 'react';
import { Link, To } from 'react-router-dom';
import { Url } from 'url';

type Props = {
	title: String;
	url: To;
};

const Cardmovie: React.FC<Props> = ({ title, url }) => {
	return (
		<div>
			<Link to={url}>{title}</Link>
		</div>
	);
};

export default Cardmovie;