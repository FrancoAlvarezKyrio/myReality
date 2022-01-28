import React, { useEffect , useState , useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import { CartContext } from '../contexts/CartContext';
import { db } from '../firebase';
import { collection , getDocs } from "firebase/firestore"



const ItemListContainer = () => {

  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)
  const { id } = useParams()
  const { cartArray } = useContext(CartContext)

useEffect(()=>{

  const productsCollection = collection(db, "products")
  const request = getDocs(productsCollection)

  request
  .then((result)=>{
    const docs = result.docs
    const newDocs = docs.map(doc=>{
      const product = {
        id : doc.id,
        ...doc.data()
      }
      return product
    })
    setProducts(newDocs)
    setLoading(false)
  })
  .catch((error)=>{
    console.log(error)
  })
  
},[id])


  return(
    <div>
      {loading ? <Loader/> : <ItemList products={products} />}
    </div>
  )
  

}



export default ItemListContainer;
