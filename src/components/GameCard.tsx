import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/img-url';
import CriticScore from './CriticScore';
import { Game } from './GameGrid';
import PlatFormIconList from './PlatFormIconList';

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card borderRadius={10} overflow='hidden'>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack justifyContent='space-between'>
					<PlatFormIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
