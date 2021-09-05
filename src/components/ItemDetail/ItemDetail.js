import React from 'react';
import {Container, Card} from 'semantic-ui-react';
import Carousel from '../Carousel/Carousel';
import ItemCounter from  '../ItemCounter/ItemCounter'
import "./ItemDetail.css";
import { useCartContext } from '../context/CartContext';
const ItemDetail = ({ item }) => {
  const{ addToCart } = useCartContext();
  
  const onAdd = (count) => {
    addToCart(item,count)
  };
  
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
        <ItemCounter stock={item.stock} onAdd={onAdd}/>
      </Card>
         
    </Container> 

  );
};

export default ItemDetail;