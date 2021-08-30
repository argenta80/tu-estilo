import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { items } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [ResultadoItems, setResultadoItems] = useState([]);
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
        setResultadoItems(items)
      })
      }, [categoryId]);

    return(
        <div>
          <h4>{categoryId}</h4>
            <div>
                {<ItemList items={ResultadoItems} />}
            </div>
        </div>
    )
}