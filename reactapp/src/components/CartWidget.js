import React, { useContext } from 'react';
import { BsCart } from "react-icons/bs";
import { Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
  
  const { productAcc } = useContext(CartContext)

  return (
      <Link to="/cart"><BsCart size="30px" id='cartWidget'/><Badge id='badge' >{productAcc()}</Badge></Link>
  )
};

export default CartWidget;
