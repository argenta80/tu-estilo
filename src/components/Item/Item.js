import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react';
import ItemCounter from '../ItemCounter/ItemCounter';



export const Item = ({ items }) => {

    return(
        <Link to={`/item/${items.id}`}>
            <Card>
                <Card.Content>
                <Card.Header>{items.name}</Card.Header>
                    <Image src={items.image} wrapped ui={false}  width='200px' height='250px' />      
                <Card.Meta>
                    <span className='date'>$ {items.price}</span>
                </Card.Meta>
                <Card.Description>
                    {items.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <ItemCounter stock={items.stock} />
                
                </Card.Content>
            </Card>
        </Link>
    )
}