import React from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
	name: String;
	url: To;
};

const Cardcharacter: React.FC<Props> = ({ name, url }) => {
	return (
		<Link
			to={url}
			className="flex h-full items-center rounded bg-zinc-900 p-4 outline-0 ring-yellow-400 transition-colors hover:bg-black focus:bg-black focus:ring-2 ">
			{name}
		</Link>
	);
};

export default Cardcharacter;
