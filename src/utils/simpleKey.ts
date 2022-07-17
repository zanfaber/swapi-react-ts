export default function simpleKey(string: String) {
	const regex = /(\d*)\/$/i;
	const result = string.match(regex);
	return result ? result[1] : string.length;
}
