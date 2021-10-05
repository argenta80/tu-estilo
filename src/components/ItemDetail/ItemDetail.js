import React from 'react';
import { Container, Divider, Segment, Grid } from 'semantic-ui-react'
import Carousel from '../Carousel/Carousel';
import ItemCounter from  '../ItemCounter/ItemCounter'
import "./ItemDetail.css";
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const{ addToCart } = useCartContext();
  
  const onAdd = (count) => {
    addToCart(item,count)
  };
  
  
  return (
    <div>
      <Segment >
          <Grid columns={2} style={{width: 1000}}>
            <Grid.Column>
              <Container style={{width: 400, height: 500}}>
                <Carousel 
                  img1={item.image1}
                  img2={item.image2}
                  img3={item.image3}
                  /> 
                </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='left'><b>{item.name}</b></Container>
              <Container textAlign='center'>
                <b>Precio: ${item.price}</b>
                <Divider />
                <Container textAlign='justified'><p>{item.description}</p></Container>
                <Divider />
                <p>
                Disponibilidad: {item.stock}
                </p>
              </Container>
              <ItemCounter item={item} onAdd={onAdd}/>
            </Grid.Column>
          </Grid>
          <Divider vertical />
      </Segment>
  </div>
  );
};

export default ItemDetail;