import React from 'react';
import ItemCount from '../containers/ItemCount';
import { Link } from 'react-router-dom';
import {  Card , ListGroup, ListGroupItem  } from 'react-bootstrap';



const ItemDetail = ({product, onAdd , added}) => {
    const { title, price, image , description } = product
    return (
        <div id="divItemDetail">
                    <Card id='cardItemDetail' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title className='titleItemDetail'>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem className="priceDetail">$ {price}</ListGroupItem>
                    <ListGroupItem>Available stock</ListGroupItem>
                    </ListGroup>
                    {added ? <Link to="/cart">Go to cart</Link> : <ItemCount stock={10} initial={1} onAdd={onAdd}/> }
                    </Card>
       </div>                       
    )
};

export default ItemDetail;
