import { Game } from '../components/GameGrid';
import useData from './useData';
import { Genre } from './useGenres';

const useGames = (selectedGenre: Genre | null) =>
	useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);

export default useGames;
