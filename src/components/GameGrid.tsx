import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
}


export interface FetchGameRes {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 2, lg: 3, xl: 4 }}
				spacing={10}
				padding='10px'>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
