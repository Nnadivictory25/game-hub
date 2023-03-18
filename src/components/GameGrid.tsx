import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

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
	metacritic: number;
}

export interface FetchGameRes {
	count: number;
	results: Game[];
}

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text color='red.500'>{error}</Text>}
			<SimpleGrid columns={{ sm: 2, lg: 3, xl: 4 }} spacing={3} padding='10px'>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer  key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard  game={game} />
                    </GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
