import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { items } from "../../services/productsService";
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'

const productsService = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productsService.then((response) => setItem(response)).finally(() => setIsLoading(false) );
    
  }, []);
  

  // Ver video After class donde hace recoje solo un item
  return (
    <div className='ItemDetailContainer'>
    
    { isLoading ? <Spinner /> : <ItemDetail item={items} />}
    
    </div>
  );
};

export default ItemDetailContainer
