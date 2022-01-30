import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Card , Button } from 'react-bootstrap';



const Total = () => {
    const { productAcc , totalPrice , clearCart } = useContext(CartContext)
  return(
    <div id='totalCart'>
        {productAcc()> 0 &&
        <Card className="text-center">
         <Card.Header className='totalTitleText'>MyRealityGrowshop</Card.Header>
          <Card.Body>
              <Card.Text className='totalItemsText'>
                Total items: {productAcc()} Units
              </Card.Text>
              <Card.Text className='totalPriceText'>
                Total price: ${totalPrice()}
              </Card.Text>
          <Button variant="primary" onClick={clearCart}>Finish purchase</Button>
          </Card.Body>
        </Card>}
    </div>

  ) 
}

export default Total;
