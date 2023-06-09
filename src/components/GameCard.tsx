import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../entities/Game';
import getCroppedImageUrl from '../services/img-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatFormIconList from './PlatFormIconList';

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent='space-between' marginBottom={3}>
					<PlatFormIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl'>
					<Link to={`/games/${game.slug}`}>{game.name}</Link>
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
}

export default GameCard;
