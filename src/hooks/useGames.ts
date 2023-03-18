import { GameQuery } from '../App';
import { Game, Platform } from '../components/GameGrid';
import useData from './useData';

const useGames = (
	gameQuery: GameQuery
) =>
	useData<Game>(
		'/games',
		{ params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
		[gameQuery]
	);

export default useGames;
