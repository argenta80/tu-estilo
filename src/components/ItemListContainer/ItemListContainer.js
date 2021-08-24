import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { items } from "../../services/productsService";


const productsService = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 20);
  });

export const ItemListContainer = () => {

    const [items, setItem] = useState([]);

    useEffect(() => {
        productsService.then((response) => setItem(response))
      }, []);

    return(
        <div>
            <div>
                {<ItemList items={items} />}
            </div>
        </div>
    )
}