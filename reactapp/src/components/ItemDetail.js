import React from 'react';
import ItemCount from '../containers/ItemCount';
import { Link } from 'react-router-dom';
import {  Card , Container , Row , Col  } from 'react-bootstrap';

const ItemDetail = ({product, onAdd , added}) => {
    const { title, price, image , description } = product
    return (       
       <Card id='divItemDetail'>
       <Container>
           <Row id='row'>
               <Col>
                   <img src={`/${image}`}/>  
               </Col>
               <Col id='colItemDetail'>
                   <h1>{title}</h1>
                   <p>{description}</p>
                   <h3>${price}</h3>
                   {added 
                   ? <Link to="/cart">Go to cart</Link> 
                   : <ItemCount stock={10} initial={1} onAdd={onAdd}/> 
                   }
               </Col>
           </Row>
       </Container>
   </Card>       
    )
};

export default ItemDetail;
