import React, {Fragment, useState, useContext, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Card, Button } from 'semantic-ui-react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase';




const Formulario = () => {
  const {register, errors, handleSubmit} = useForm();
  
  const { cart, setCart} = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [buyer, setBuyer] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })

  useEffect(() => {
    setBuyer({ nombre: nombre, telefono: telefono, email: email });
  }, [nombre, telefono, email]);

  const handleClient = () => {
    console.log('handleClient');
    if (nombre !== "" && email !== "" && telefono !== ""){
      setBuyer({ nombre: nombre, email: email, telefono: telefono });
      console.log('handleOrder');
      handleOrder();
    }else{
      const error = 'Todos los Campos son Obligatorios';
      console.log('Error: ', error)
    }
  }

  console.log('buyer: ', buyer)

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
    const myOrder = {
      buyer: buyer,
      items: myItems,
      total: totalQuantity,
      date: 'Date.now()' ,
    };
    console.log(myOrder);

    saveOrder(myOrder);
    console.log(myOrder);
  }


   const updateStockInProduct = async (item) => {    
     const productRef = db.collection('products');
     await productRef.doc(item.id).update({
       stock: item.stock - item.quantity
     });
   };
  
  const saveOrder = async (order) => {
    
		//const data = await db.collection('compras').doc().set(order);
    db.collection("compras2").doc().set(order)
      .then(() => {
        console.log("Document successfully written!");
      });
    // console.log('Data:', data )
	};


  
  // handleOrder();
  return (
    <Fragment>
        <form className="row">
        <div display= 'flex'
             justifyContent= 'center'>
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
          
        </form>
    </Fragment>
  )
}

export default Formulario;