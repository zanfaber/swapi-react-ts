import React from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
	title: string;
	url: To;
};

const Cardmovie: React.FC<Props> = ({ title, url }) => {
	return (
		<Link
			to={url}
			className="flex h-full items-center rounded bg-zinc-900 p-4 leading-tight outline-0 ring-yellow-400 transition-colors hover:bg-black focus:bg-black focus:ring-2">
			{title}
		</Link>
	);
};

export default Cardmovie;
