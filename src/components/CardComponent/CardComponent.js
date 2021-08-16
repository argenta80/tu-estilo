import React from 'react'
import { Card, Image , Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const CardComponent = ({product , description , img}) => (
  <Card>
    <Card.Content>
      <Image src={img}
      />
      <Card.Header>{product}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          +
        </Button>
        <Button basic color='red'>
          -
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export default CardComponent;