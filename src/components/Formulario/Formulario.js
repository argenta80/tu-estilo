import { stringLiteral } from '@babel/types';
import React, {Fragment, useState, useContext, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Card, Button, Modal } from 'semantic-ui-react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase';


function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}


const Formulario = () => {
  const {register, errors} = useForm();
  
  const { cart, clear } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [buyer, setBuyer] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer, size } = state

  const openModal = () => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring', size: 'mini' })

  const body = (<Modal
                  dimmer={dimmer}
                  open={open}
                  onClose={() => dispatch({ type: 'CLOSE_MODAL', size: 'mini' })}
                >
                  <Modal.Header>Su Compra Se realizo con Exito</Modal.Header>
                    <Modal.Content>
                      Let Google help apps determine location. This means sending anonymous
                      location data to Google, even when no apps are running.
                    </Modal.Content>
                  <Modal.Actions>
                    <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                     Agree
                    </Button>
                  </Modal.Actions>
                </Modal>);
  
  useEffect(() => {
    setBuyer({ nombre: nombre, telefono: telefono, email: email });
  }, [nombre, telefono, email]);

  const handleClient = () => {
    if (nombre !== "" && email !== "" && telefono !== ""){
      setBuyer({ nombre: nombre, email: email, telefono: telefono });
      handleOrder();
      openModal();
      clear();

    }else{
      const error = 'Todos los Campos son Obligatorios';
    }
  }

  const handleOrder = () =>{
    const myItems = [];
    let totalQuantity = 0;
    cart.forEach((item) => {
      updateStockInProduct(item);
      totalQuantity += item.price * item.quantity
      myItems.push({
        title: item.name,
        id   : item.id,
        price: item.price
      })
    })
    const fecha = new Date()
    console.log(fecha)
    const myOrder = {
      buyer: buyer,
      items: myItems,
      total: totalQuantity,
      date: fecha.toTimeString(),
    };
    saveOrder(myOrder);
  }


   const updateStockInProduct = async (item) => {    
     const productRef = db.collection('products');
     await productRef.doc(item.id).update({
       stock: item.stock - item.quantity
     });
   };
  
  const saveOrder = async (order) => {
    
    db.collection("Ordenes").doc().set(order)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) =>{console.error('Error de escritura:', error);
    });
	};

  return (
    <div>

    <Fragment>
        <div className='formulario' display= 'flex'
             justifyContent= 'center' align='center'>
        <Card>
           <Card.Header>Finaliza tu compra</Card.Header>
           {/* <Card.Header>Total: ${totalQuantity}</Card.Header> */}
            <Card.Content>
              <div className="mb-3">
                <input
                  placeholder="Nombre de facturacion"
                  className="form-control my-2"
                  type="text"
                  name="nombre"
                  onChange={(e) => setNombre(e.target.value)}
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
              <div className="mb-3">
                <input
                  placeholder="Email"
                  className="form-control my-2"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="mb-3">
                <input
                  placeholder="Telefono de contacto"
                  className="form-control my-2"
                  type="tel"
                  name="telefono"
                  onChange={(e) => setTelefono(e.target.value)}
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
              <div className="mb-3">
                 <Button 
                  className="btn btn-primary"
                  disabled={!(buyer.nombre !== "" && buyer.email !== "" && buyer.telefono !== "")} 
                  onClick={ () => handleClient() }
                  >Realizar Compra</Button>
              </div>
            </Card.Content>
        </Card>
        </div>
    </Fragment>
    <div>
      {body}
    </div>
  </div>
  )
}

export default Formulario;