import React from 'react';

type Props = {
	children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
	return <li>{children}</li>;
};

export default Card;
