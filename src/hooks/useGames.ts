import { useEffect, useState } from 'react';
import { FetchGameRes, Game } from '../components/GameGrid';
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true)
		apiClient
			.get<FetchGameRes>('/games', { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results)
				setLoading(false)
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false)
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;
