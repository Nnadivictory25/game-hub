import { useEffect, useState } from 'react';
import { FetchGameRes, Game } from '../components/GameGrid';
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<FetchGameRes>('/games', { signal: controller.signal })
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { games, error };
};

export default useGames;
