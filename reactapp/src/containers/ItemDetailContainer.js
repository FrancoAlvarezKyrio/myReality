import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import ItemDetail from '../components/ItemDetail';


const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(false)
  const { id } = useParams()

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
  console.log(`Agregaste ${count} unidades de ${product.title}`)
}


  return(
    <div>
      {loading ? <Loader/> : <ItemDetail onAdd={onAdd} product={product} />}
    </div>
  )
  

}
export default ItemDetailContainer;
