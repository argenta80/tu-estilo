import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { items } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [Resultadoitems, setItem] = useState([]);
  const {categoryId} = useParams()
  
  useEffect(() => {
    const productsService = new Promise((resolve, reject) => {
        setTimeout(() => {
        
            categoryId ?
            resolve(items.filter(e=>e.categoria === categoryId))
            :
            resolve(items)
        }, 2000);
      })

      productsService.then((items) => {
        setItem(items)
      })
      }, [categoryId]);

    return(
        <div>
          <h4>{categoryId}</h4>
            <div>
                {<ItemList items={Resultadoitems} />}
            </div>
        </div>
    )
}