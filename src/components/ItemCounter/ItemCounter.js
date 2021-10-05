import React, {useContext, useState} from 'react'
import { Icon, Button, Container, Segment} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'; 
import 'semantic-ui-css/semantic.min.css';




const ItemCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const {getQuantityByItem} = useContext(CartContext);
  const incrementalBtn = document.getElementsByClassName('incrementalBtn');
  const decrementalBtn = document.getElementsByClassName('decrementalBtn');
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrement = () => {
    const quantity = getQuantityByItem(props.item.id) + counter;
    (quantity < props.item.stock) ? setCounter( counter + 1) : setShowAlert(true);
  }

  const handleDecrement = () => {
    counter <= 0 ? decrementalBtn.disabled = false : setCounter( counter - 1);
  }

  return(
    <Container style={{width: 400, height: 500, paddingTop: 15}}>
      <Segment>
        <p>{counter}</p>
        <div className='ui two buttons'>
          <Button className='incrementalBtn' basic color ='green' onClick={handleIncrement}> <Icon className = 'plus'/> </Button>
          <Button className='decrementalBtn' basic color ='red' onClick={handleDecrement}> <Icon className = 'minus'/></Button>
        </div>
        { showAlert && 
          <div className="ui negative message"> <i class="close icon"></i> <div class="header"> Error </div> <p>Este Articulo no tiene Disponibilidad </p></div>}
        <div>
        {counter > 0 && (
              <Link
                to={{
                  pathname: "/cart"
                }}
              >
                <Button variant="contained" color="primary" onClick={() => props.onAdd(counter)}>
                  Añdir al carrito
                </Button>
              </Link>
          )}
        </div>
      </Segment>
    </Container>
    )
  }

export default ItemCounter;