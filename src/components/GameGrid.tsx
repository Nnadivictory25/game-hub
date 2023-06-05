import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text color='red.500'>{error.message}</Text>;

	const fetchedGameCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	return (
		<InfiniteScroll
			dataLength={fetchedGameCount}
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}>
			<SimpleGrid columns={{ sm: 2, lg: 3, xl: 4 }} spacing={6} padding='10px'>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page, i) => (
					<React.Fragment key={i}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;
