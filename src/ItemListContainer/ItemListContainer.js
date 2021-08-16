import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ItemListContainer = ({product , description , img}) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{product}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default ItemListContainer