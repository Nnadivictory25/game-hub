import { Game } from '../components/GameGrid';
import useData from './useData';

const useGames = () => useData<Game>('/games')

export default useGames;
