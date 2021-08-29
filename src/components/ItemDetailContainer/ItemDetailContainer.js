import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { items } from "../../services/productsService";
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const productsService = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [Resultadoitems, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {itemId} = useParams()

  // useEffect(()=> {

  //   productsService.then((items)=> {
  //     setItem(items)
  //   })

  // }, [])

  
  useEffect(() => {
    productsService.then((response) => setItem(response.filter((items) => items.id === itemId)[0])).finally(() => setIsLoading(false) );
    
  }, [itemId]);
  
  console.log(items)

  // Ver video After class donde hace recoje solo un item
  return (

    <div className='ItemDetailContainer'>
      <h2 ></h2>
    
    { isLoading ? <Spinner /> : <ItemDetail item={Resultadoitems} />}
    
    </div>
  )
}

export default ItemDetailContainer