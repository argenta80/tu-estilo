import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
// import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';


const ItemDetailContainer = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const {itemId} = useParams()

  const [filteredProduct, setProducts] = useState({});
  
  const getProduct = async () => {
    db.collection("products")
    .onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
        const filteredProduct = docs.filter((product) => {
          return product.id === `${itemId}`})
      setProducts(filteredProduct[0])

    });
  };


   useEffect (()=> {
     getProduct()
   }, [itemId]);
  
 /*  useEffect(() => {
    productsService 
      .then((response) => {
        const [filteredItem] = response.filter((items) => {
          return items.id === Number(itemId);
        })
        setResultadoItems(filteredItem);
        })
        .finally(() => setIsLoading(false));
  }, [itemId]); */

    return (

    
    <div className='ItemDetailContainer'>
      { /* isLoading ? <Spinner /> : */ <ItemDetail item={filteredProduct} />}
    </div>
  )
}

export default ItemDetailContainer