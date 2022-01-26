import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';


const ItemListContainer = () => {

  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)
  const { id } = useParams()

useEffect(()=>{
  setLoading(true)
  const url = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products/`
  const getCollection = fetch(url)

  getCollection
  .then(res=>res.json())
  .then((res)=>{
    setProducts(res)
    setLoading(true)
  })
  .catch((err)=>console.log(err))
  .finally(()=>setLoading(false))  
},[id])


  return(
    <div>
      {loading ? <Loader/> : <ItemList products={products} />}
    </div>
  )
  

}



export default ItemListContainer;
