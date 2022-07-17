import React from 'react';

type Props = {
	children?: React.ReactNode;
};

const Cardwrapper: React.FC<Props> = ({ children }) => {
	return (
		<ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{children}
		</ul>
	);
};

export default Cardwrapper;
