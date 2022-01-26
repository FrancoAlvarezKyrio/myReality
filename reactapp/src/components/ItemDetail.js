import React from 'react';
import ItemCount from '../containers/ItemCount';



const ItemDetail = ({product, onAdd}) => {
    const { title, price, image , description } = product
  
    return (
        <div id='itemDetail'>

        <div id='itemImgDiv'>
            <img className='imgDetail' src={image}/>
        </div>

        <div id='itemDetailDiv'>        
            <h1>{title}</h1>
            <p>$ {price}</p>
            <h3>{description}</h3>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>

      </div>
      
    )
};

export default ItemDetail;
