import { To } from 'react-router-dom';

const getReourceId = (uri: To): string | null => {
	const regex = /(\d*)\/$/i;
	const result = uri.toString().match(regex);
	return result ? result[1] : null;
};

export default getReourceId;
