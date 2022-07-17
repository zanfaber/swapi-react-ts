import icon from '../../assets/puff.svg';
export const Loader = () => {
	return (
		<div className="m-4 flex flex-col items-center rounded-lg bg-zinc-700 p-8">
			<img src={icon} className="w-8" alt="loading" />
			<p className="pt-4 opacity-70">Using the Force...</p>
		</div>
	);
};
