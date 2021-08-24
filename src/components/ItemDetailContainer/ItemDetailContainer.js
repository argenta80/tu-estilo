import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { items } from "../../services/productsService";
import Spinner from '../Spinner/Spinner';

const productsService = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 5000);
});
console.log(items)

const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoadisng] = useState(true);

  useEffect(() => {
    productsService.then((response) => setItem(response));
    setIsLoadisng(false)
  }, []);
  

  // Ver video After class donde hace recoje solo un item
  return (
    <div>
    
    { isLoading ? <Spinner /> : <ItemDetail item={items} />}
    
    </div>
  );
};

export default ItemDetailContainer
