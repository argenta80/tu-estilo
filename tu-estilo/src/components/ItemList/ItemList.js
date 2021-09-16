import React from "react"
import './ItemList.css';
import { Item } from "../Item/Item"

export const ItemList = (props) => {

    return(
        <div className='ItemListContainer'>
            <div className='ItemList'>
                {
                    props.items.map((items) =>{
                        return (
                            <Item items={items} key={items.id}/>
                            )
                        })
                    }
            </div>
        </div>
    )
}