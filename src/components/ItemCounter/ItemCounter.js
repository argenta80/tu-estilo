import React, {useState} from 'react'
import { Icon, Button, Container, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const ItemCounter = ({title}) => {
  const [counter, setCounter] = useState(0);
  const incrementalBtn = document.getElementsByClassName('incrementalBtn');
  const decrementalBtn = document.getElementsByClassName('decrementalBtn');
  const handleIncrement = () => {
    counter < 30 ? setCounter( counter + 1) : incrementalBtn.disabled = false ;
  }

  const handleDecrement = () => {
    counter <= 0 ? decrementalBtn.disabled = false : setCounter( counter - 1);
  }
  return(
    <Container>
      <Segment>
        <h1>{title}</h1>
        <h3>{counter}</h3>
        <div className='ui two buttons'>
          <Button className='incrementalBtn' basic color ='green' onClick={handleIncrement}> <Icon className = 'plus'/> </Button>
          <Button className='decrementalBtn' basic color ='red' onClick={handleDecrement}> <Icon className = 'minus'/></Button>
        </div>
      </Segment>
    </Container>
    )
  }

export default ItemCounter;