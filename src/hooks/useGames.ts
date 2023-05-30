import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Game } from '../components/GameGrid';
import apiClient from '../services/api-client';
import { FetchRes } from '../services/api-client';

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchRes<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient.get<FetchRes<Game>>('/games', {
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			})
		.then(res => res.data)
	});

export default useGames;
