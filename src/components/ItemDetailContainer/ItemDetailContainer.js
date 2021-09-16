import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { items } from "../../services/productsService";
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';


const productsService = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [ResultadoItems, setResultadoItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {itemId} = useParams()

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data(), doc.id);
        
      });
    });
    // const q = query(collection(db, 'products'));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, '=>', doc.data);
    // });
  };


  useEffect (()=> {
    getProducts();
  }, []);
  
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
      { isLoading ? <Spinner /> : <ItemDetail item={ResultadoItems} />}
    </div>
  )
}

export default ItemDetailContainer