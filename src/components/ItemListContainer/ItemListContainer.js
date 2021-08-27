import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { items } from "../../services/productsService";
import { useParams } from "react-router-dom";

const productsService = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 200);
});

export const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const {categoryId} = useParams()
  console.log(items)
    
    useEffect(() => {
      console.log(categoryId)
      categoryId ?
        productsService.then((response) => setItem(response.filter((items) => items.categoria === categoryId)[0]))
        :
        productsService.then((response) => setItem(response))
      }, []);
      
console.log(items)

    return(
        <div>
          <h4>{categoryId}</h4>
            <div>
                {<ItemList items={items} />}
            </div>
        </div>
    )
}