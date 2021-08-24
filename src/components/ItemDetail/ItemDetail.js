import {Container, Card} from 'semantic-ui-react';
import Carousel from '../Carousel/Carousel';
import ItemCounter from  '../ItemCounter/ItemCounter'
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  console.log(item)
  
  return (
    <Container>
      <Card style={{width: 900}}>
        <Carousel 
              //  img1={item[0].image1}
              // img2={item[0].image2}
              // img3={item[0].image3}
          />
        <Card.Content>
          <Card.Header>{/* {item[0].name} */}</Card.Header>
          <Card.Meta>
            {/* {item[0].preice} */}
            {/* {item[0].stock} */}
          </Card.Meta>
          <Card.Description>
            {/* {item[0].descrition} */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          
        </Card.Content>
        <ItemCounter /* stock={item[0].stock} */ />
      </Card>

         
    </Container> 

  );
};

export default ItemDetail;