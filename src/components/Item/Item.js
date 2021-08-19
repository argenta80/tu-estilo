import React from "react";
import { Card, Image } from 'semantic-ui-react';
import ItemCounter from '../ItemCounter/ItemCounter';


export const Item = ({ items }) => {
    const randomImageUrl = `https://source.unsplash.com/random/200x200?sig=${items.id}`;

    return(
        <Card>
            <Image className='imagen' src={randomImageUrl} wrapped ui={false} />
            <Card.Content>
					<Card.Header>{items.title}</Card.Header>
					<Card.Meta>
						<span className='date'>{items.body}</span>
					</Card.Meta>
					<Card.Description>{items.url}</Card.Description>
                    <ItemCounter
                    stock={30} />
			</Card.Content>
        </Card>
        
    )
}