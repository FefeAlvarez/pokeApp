import { FC } from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            objectFit='cover'
            width='100%'
            height={140}
            alt={`${id}`}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}