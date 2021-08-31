import React, {useState} from 'react'
import { Icon, Button, Container, Segment} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


const ItemCounter = ({stock}) => {
  const [counter, setCounter] = useState(0);
  const [cartBtn, setCartBtn] = useState(false);
  const incrementalBtn = document.getElementsByClassName('incrementalBtn');
  const decrementalBtn = document.getElementsByClassName('decrementalBtn');

  const handleAddCart = () =>{
    setCartBtn(true);
  }

  const handleIncrement = () => {
    counter < stock ? setCounter( counter + 1) : incrementalBtn.disabled = false ;
  }

  const handleDecrement = () => {
    counter <= 0 ? decrementalBtn.disabled = false : setCounter( counter - 1);
  }
  return(
    <Container>
      <Segment>
        <p>{counter}</p>
        <div className='ui two buttons'>
          <Button className='incrementalBtn' basic color ='green' onClick={handleIncrement}> <Icon className = 'plus'/> </Button>
          <Button className='decrementalBtn' basic color ='red' onClick={handleDecrement}> <Icon className = 'minus'/></Button>
        </div>
        <div>
          <Link to={'/cart'}><Button className='addCart' basic onClick={handleAddCart}>Agregar al carrito</Button></Link>
        </div>
      </Segment>
    </Container>
    )
  }

export default ItemCounter;