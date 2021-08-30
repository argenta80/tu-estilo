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
  const [ResultadoItems, setResultadoItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {itemId} = useParams()


  
  useEffect(() => {
    productsService 
      .then((response) => {
        const [filteredItem] = response.filter((items) => {
          return items.id === Number(itemId);
        })
        setResultadoItems(filteredItem);
        })
        .finally(() => setIsLoading(false));
  }, [itemId]);

  return (

    
    <div className='ItemDetailContainer'>
      { isLoading ? <Spinner /> : <ItemDetail item={ResultadoItems} />}
    </div>
  )
}

export default ItemDetailContainer