import { useNavigate } from 'react-router-dom';

const BackButton = () => {
	let navigate = useNavigate();

	return (
		<button
			className="-ml-1 flex items-center gap-2 rounded px-1 text-sm outline-0 ring-yellow-400 transition-opacity hover:opacity-70 focus:ring-2"
			onClick={() => navigate(-1)}>
			<span className="text- flex h-6 w-6 items-center justify-center rounded-full bg-zinc-600 p-1">
				&lt;
			</span>{' '}
			<span className="text-zinc-300">Back</span>
		</button>
	);
};

export default BackButton;
