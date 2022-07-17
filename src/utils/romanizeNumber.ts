// const romanizeNumber = (num: number) => {
// 	const lookup = {
// 		M: 1000,
// 		CM: 900,
// 		D: 500,
// 		CD: 400,
// 		C: 100,
// 		XC: 90,
// 		L: 50,
// 		XL: 40,
// 		X: 10,
// 		IX: 9,
// 		V: 5,
// 		IV: 4,
// 		I: 1,
// 	};
// 	let roman = '';
// 	for (let i in lookup) {
// 		while (num >= lookup[i]) {
// 			roman += i;
// 			num -= lookup[i];
// 		}
// 	}
// 	return roman;
// };
// to work on typeescript version of the previous function,
// for now wr take the hardocded one
const romanizeNumber = (num: number) => {
	const lookup = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'VIII'];
	return lookup[num];
};
export default romanizeNumber;
