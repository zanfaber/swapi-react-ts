import { To } from 'react-router-dom';
import getReourceId from './getResourceId';

const simpleKey = (uri: To): string | number => {
	const key = getReourceId(uri);
	if (key != null) return key;
	return uri.toString().length;
};
export default simpleKey;
