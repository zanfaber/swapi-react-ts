import React from 'react';

type Props = {
	children?: React.ReactNode;
};

const Cardwrapper: React.FC<Props> = ({ children }) => {
	return <ul>{children}</ul>;
};

export default Cardwrapper;
