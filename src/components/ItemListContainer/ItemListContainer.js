import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../firebase';


export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()

  const getProducts = async () => {
    categoryId ?
    db.collection("products")
    .where('categoria','==',`${categoryId}`)
    .onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setProducts(docs)
    })
    :
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setProducts(docs)
    })
  };

  useEffect (()=> {
    getProducts();
  }, [categoryId]);
  
    return(
        <div>
          <h4>{categoryId}</h4>
            <div>
                {<ItemList items={products} />}
            </div>
        </div>
    )
}