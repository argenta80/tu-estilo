import React, {Fragment, useState, useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Card } from 'semantic-ui-react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase';



const Formulario = () => {
  const {register, errors, handleSubmit} = useForm();
  
  const { cart, setCart} = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })

  
  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name] : event.target.value

    })
  }

  const onSubmit = (data, event) =>{
    event.preventDefault();
    

  }

  const handleOrder = () =>{
    const myItems = [];
    let totalQuantity = 0;
    cart.forEach((item) => {
      console.log(item.price, item.quantity);
      let subQuantity = item.price * item.quantity
      console.log(subQuantity)
      totalQuantity += item.price * item.quantity
      myItems.push({
        title: item.name,
        id   : item.id,
        price: totalQuantity
      })
    })
    const myOrder = {
      buyer: buyer,
      items: myItems,
      total: totalQuantity,
      date: '26-09-2021',
    };
    saveOrder(myOrder);
    console.log(myOrder);
  }


  const saveOrder = async (order) => {
		await db.collection('compras').doc().set(order);
		console.log('Producto Agregado!');
		db.collection('compras').onSnapshot((querySnapshot) => {
			//querySnapshot.forEach((doc) => {
		
			//});
		});
	};
  
  handleOrder();
  return (
    <Fragment>
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div display= 'flex'
             justifyContent= 'center'>
        <Card>
           <Card.Header>Finaliza tu compra</Card.Header>
           {/* <Card.Header>Total: ${totalQuantity}</Card.Header> */}
            <Card.Content>
              <div class="mb-3">
                <input
                  placeholder="Nombre de facturacion"
                  className="form-control my-2"
                  type="text"
                  name="nombre"
                  onChange={handleInputChange}
                  ref={
                    register({
                      required: {value:true, message: 'Campo obligatorio'},
                      minLength: {value: 5, message: 'Minimo 5 caracteres'}
                    })
                  }
                />
                  { errors.nombre &&
                    <span>
                      {errors.nombre.message}
                    </span>}
              </div>
              <div class="mb-3">
                <input
                  placeholder="Email"
                  className="form-control my-2"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  ref={
                    register({
                      required: {value:true, message: 'Campo obligatorio'},
                      minLength: {value: 5, message: 'Minimo 5 caracteres'}
                     })
                  }
                />
                  { errors.email &&
                    <span>
                      {errors.email.message}
                    </span>}
              </div>
              <div class="mb-3">
                <input
                  placeholder="Telefono de contacto"
                  className="form-control my-2"
                  type="tel"
                  name="telefono"
                  onChange={handleInputChange}
                  ref={
                    register({
                      required: {value:true, message: 'Campo obligatorio'},
                      minLength: {value: 5, message: 'Minimo 5 caracteres'}
                    })
                  }
                />
                  { errors.telefono &&
                    <span>
                      {errors.telefono.message}
                    </span>}
              </div>
              <div class="mb-3">
                 <button 
                  className="btn btn-primary" 
                  type="submit"
                  onClick={() => {
                    handleOrder();
                  }}
                  >Realizar Compra</button>
              </div>
            </Card.Content>
        </Card>
        </div>
          
        </form>
    </Fragment>
  )
}

export default Formulario;