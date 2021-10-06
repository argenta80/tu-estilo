
import React, {Fragment, useState, useContext, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Card, Button, Modal } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/styles';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase';


function exampleReducer(state, action) {
  switch (action.type) {
  case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
  return { ...state, closeOnDimmerClick: action.value }
  case 'CONFIG_CLOSE_ON_ESCAPE':
  return { ...state, closeOnEscape: action.value }
  case 'OPEN_MODAL':
  return { ...state, open: true }
  case 'CLOSE_MODAL':
  return { ...state, open: false }
  default:
  throw new Error()
  }
  }
  
  const useStyles = makeStyles((theme) => ({
    modal:{
      position: 'absolute',
      width: 400,
      // boxShadow: theme.boxShadow[5],
      padding: "16px 32px 24px",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  }))
  const Formulario = () => {
    const {register, errors} = useForm();
    const [total, setTotal] = useState(0);
    const { cart, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [buyer, setBuyer] = useState({
      nombre: '',
      email: '',
      telefono: ''
    })
    const history = useHistory();
    const styles = useStyles();

  const [state, dispatch] = React.useReducer(exampleReducer, {
    closeOnEscape: true,
    closeOnDimmerClick: true,
    open: false,
    dimmer: undefined,
    })
    const { open, closeOnEscape, closeOnDimmerClick } = state

  const openModal = () => dispatch({ type: 'OPEN_MODAL'})
  
  const body = (
  <div>
    <Modal
      closeOnEscape={closeOnEscape}
      closeOnDimmerClick={closeOnDimmerClick}
      open={open}
      onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
      onClose={() => goToHome()}
      >
      <Modal.Header>Su Compra Se realizo con Exito</Modal.Header>
        <Modal.Content>
          <p>La compra fue procesada satisfactoriamente, el numero de ID de la orden es: {ordenId}</p>
          <p>Cualquier inconveniente pongase en contacto con atencion al cliente</p>
        </Modal.Content>
      <Modal.Actions>
      <Link to={"/"}>
        <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
        Agree
        </Button>
      </Link>
      </Modal.Actions>
    </Modal>
  </div>
  );


  useEffect(() => {
    setBuyer({ nombre: nombre, telefono: telefono, email: email });
  }, [nombre, telefono, email]);

  const goToHome = () =>{
    history.push(`/`)
  }

  const handleClient = () => {
    if (nombre !== "" && email !== "" && telefono !== "" && (/^([0-9])*$/.test(telefono))){
      setBuyer({ nombre: nombre, email: email, telefono: telefono });
      handleOrder();
      openModal();
      clear();
      

    }else{
      const error = 'Todos los Campos son Obligatorios';
    }
  }

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
    
    db.collection("Ordenes").add(order)
      .then((docRef) => {
        setOrdenId(docRef.id)
      })
      .catch((error) =>{console.error('Error de escritura:', error);
    });
	};

  return (
    <div>
    <Fragment>
        <div className='formulario' 
              align='center'>
        <Card>
           <Card.Header>
             <h2>Finaliza tu compra</h2>
             <h3>El monto total a abonar es <strong>${total}</strong></h3>
             <p>Complete sus datos para finalizar la operacion</p>
             </Card.Header>
           
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
                  type="number"
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
                  disabled={!(nombre !== "" && email !== "" && telefono !== "" && (/^([0-9])*$/.test(telefono)) &&  ((/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email))))} 
                  onClick={ () => handleClient() }
                  >Realizar Compra</Button>
              </div>
            </Card.Content>
        </Card>
        </div>
    </Fragment>
    <div className={styles.modal}>
      {body}
    </div>
  </div>
  )
}

export default Formulario;