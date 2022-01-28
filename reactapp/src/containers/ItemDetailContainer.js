import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import ItemDetail from '../components/ItemDetail';
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify';


const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(false)
  const [added,setAdded] = useState(false)
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

useEffect(()=>{
  setLoading(true)
  const url = `https://fakestoreapi.com/products/${id}`
  const getItem= fetch(url)

  getItem
  .then(res=>res.json())
  .then((res)=>{
    setProduct(res)
  })
  .catch((err)=>console.log(err))
  .finally(()=>setLoading(false))  
},[])

const onAdd = (count) => {
  addToCart(count , product)
  setAdded(true)
  toast.success(`The product was added to the cart`)
}


  return(
    <div>
      {loading ? <Loader/> : <ItemDetail onAdd={onAdd} product={product} added={added} />}
    </div>
  )
  

}
export default ItemDetailContainer;
