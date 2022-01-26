import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item ({product}) {
  const { title, price, image } = product
  
return (
  <div id='itemDiv'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Link to={`/item/${product.id}`}><Button variant="primary">Go somewhere</Button></Link>
        
      </Card.Body>
    </Card>
  </div>
)

}



export default Item;
