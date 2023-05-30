import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId);

	const selectedPlatform = usePlatform(gameQuery.platformId)

	const heading = `${selectedPlatform?.name || ''} ${genre?.name || ''} Games`;

	return (
		<Heading as='h1' marginBottom={3}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
