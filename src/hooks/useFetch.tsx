import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
	const [response, setResponse] = useState(null as any);
	const [error, setError] = useState(null as unknown);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		const fetchData = async () => {
			setLoading(true);

			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				if (!signal.aborted) {
					if (data.results) setResponse(data.results);
					else setResponse(data);
				}
			} catch (error) {
				if (!signal.aborted) setError(error);
			} finally {
				if (!signal.aborted) {
					setLoading(false);
				}
			}
		};
		fetchData();

		return () => {
			abortController.abort();
		};
	}, []);

	return { response, error, loading };
};

export default useFetch;
