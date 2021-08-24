import {Container, Card} from 'semantic-ui-react';
import Carousel from '../Carousel/Carousel';
import ItemCounter from  '../ItemCounter/ItemCounter'
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  
  return (
    <Container>
      <Card style={{width: 500}}>
        <Carousel 
          img1={item[0].image1}
          img2={item[0].image2}
          img3={item[0].image3}
         /> 
        <Card.Content>
          <Card.Header> {item[0].name} </Card.Header>
            <span className='date'><strong>${item[0].price}</strong></span>
          <Card.Meta>
          <span className='date'><strong>Disponibilidad: {item[0].stock}</strong></span>
          </Card.Meta>
          <Card.Description>
          {item[0].description}
          </Card.Description>
        </Card.Content>
        <ItemCounter stock={item[0].stock} />
      </Card>
         
    </Container> 

  );
};

export default ItemDetail;