import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import ItemDetail from '../components/ItemDetail';
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { collection, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(true)
  const [added,setAdded] = useState(false)
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

useEffect(()=>{
  const productsCollection = collection(db, "products")
  const docRef = doc(productsCollection,id)
  const request = getDoc(docRef)
  request
  .then((result)=>{
    setProduct({id:result.id, ...result.data()  })
    setLoading(false)
  })
  .catch((error)=>{
    toast.error(error)
  })
},[id])

const onAdd = (count) => {
  addToCart(count , product)
  setAdded(true)
  toast.success(`The product was added to the cart`)
}
  return(
    <div>
      {loading 
               ? <Loader/> 
               : <ItemDetail onAdd={onAdd} product={product} added={added} />}
    </div>
  )
}
export default ItemDetailContainer;
