import {Container, Card} from 'semantic-ui-react';
import Carousel from '../Carousel/Carousel';
import ItemCounter from  '../ItemCounter/ItemCounter'
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  console.log(item)
  console.log(item.image1)
  console.log(item.image2)
  console.log(item.image3)
  console.log(item.name)
  console.log(item.price)
  console.log(item.stock)
  console.log(item.description)
  
  return (
    <Container>
      <Card style={{width: 500}}>
        <Carousel 
          img1={item.image1}
          img2={item.image2}
          img3={item.image3}
         /> 
        <Card.Content>
          <Card.Header> {item.name} </Card.Header>
            <span className='date'><strong>${item.price}</strong></span>
          <Card.Meta>
          <span className='date'><strong>Disponibilidad: {item.stock}</strong></span>
          </Card.Meta>
          <Card.Description>
          {item.description}
          </Card.Description>
        </Card.Content>
        <ItemCounter stock={item.stock} />
      </Card>
         
    </Container> 

  );
};

export default ItemDetail;