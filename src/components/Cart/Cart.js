import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { Button, Card } from 'semantic-ui-react';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));


const Cart = () =>{

    const classes = useStyles();
    const { cart, removeCart, clear} = useContext(CartContext);
    const [total, setTotal] = useState(0)

     const handleOrder = () => {
      const myItems = [];
      let totalQuantity = 0;

      cart.forEach((item) => {
        totalQuantity += item.quantity * item.price;
        myItems.push({
          title: item.title,
          id: item.id,
          price: item.price,
          totalQuantity: totalQuantity
        });
      });
      return totalQuantity
    };

    handleOrder();
    const handleClear = () =>{
      clear();
    };
    const handleTotal = () =>{
      let amount =0;
      cart.forEach((item) => {
        amount += item.quantity * item.price
      })
      setTotal(amount)
    }
    
    useEffect(() => {
      handleTotal();
    },[]);

    useEffect(() => {
      handleTotal();
    },[cart]);


    return(
      <div>
        {cart.length ===0 &&
          (<>
                <div className="cart-empty">
                  El carrito esta vacio
                </div>
                <div>
                <Link to={"/"}>
                  <Button variant="contained" color="primary">
                    Agregar productos a mi carrito
                  </Button>
                </Link>
                </div>
            </>
          )
        }
        <table>
            <tr>
              <th className='col-md-8'>
                {cart.length !==0 && (
                  cart.map((cart, i) => {
                    return( 
                      <div className="container">
                        <div className="row">
                          <container>
                            <div className={classes.root}>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={2}>
                                    <Grid item color='blue'>
                                        <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={cart.image} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                            {cart.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                            {cart.description}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                            {cart.quantity}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button
                                                    onClick={()=>{
                                                      removeCart(cart.id)
                                                    }}>
                                                    Remover
                                                </Button>
                                            </Typography>
                                        </Grid>
                                        </Grid>
                                        <Grid item>
                                        <Typography variant="subtitle1">Precio Total: ${parseFloat(cart.price)* cart.quantity}</Typography>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                          </container>
                        </div>
                      </div>             
                    );
                    })
                )}
              </th>
              <th className='col-md-2'>
              {cart.length !==0 &&
                <div className= "col" >
                  <Card.Group>
                    <Card color='green'>
                      <Card.Content>
                        <Card.Header>Su orden esta casi lista</Card.Header>
                        <Card.Meta>El total es: $ {total}</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                        <Link to={{ pathname: "/formulario"}} >
                          <Button basic color='green' onClick={total}>
                            Terminar Compra
                          </Button>
                        </Link>
                          <Link to={"/"}>
                          <Button basic color='red' onClick={handleClear}>
                            Cancelar Compra
                          </Button>
                          </Link>
                        </div>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </div> }
              </th>
            </tr>
          </table>
        </div>



    )
}

export default Cart;