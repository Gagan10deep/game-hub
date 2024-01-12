import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIcon from './PlatformIcon'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'


interface Props {
    game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
     <Card width={250} borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformIcon platforms={game.parent_platforms.map((p: { platform: any }) => p.platform)}/>
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
        </CardBody>
     </Card>
  )
}

export default GameCard;
