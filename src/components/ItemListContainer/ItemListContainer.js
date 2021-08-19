import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";


const URL = 'https://jsonplaceholder.typicode.com/posts';

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            setItems(data)
        })

    }, [])

    return(
        <div>
            <div>
                {<ItemList items={items}/>}
            </div>
        </div>
    )
}