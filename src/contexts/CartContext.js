import React, { createContext , useState } from 'react';
import { toast } from 'react-toastify';


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState ([])

    const addToCart = (count , product) => {
        if(isInCart(product.id)){
            console.log("El producto ya ha sido añadido al carrito")
        }else{
            const newObj = {
                item: product,
                count
            }
            setCartArray([...cartArray, newObj])
        }   
    } 

    const removeItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id)
        setCartArray(updatedCart)
        toast.error(`The product was removed from the cart`)
    }

    const clearCart = () => {
        setCartArray([])
    }

    const productAcc = () => {
        return cartArray.reduce((acc,item) => acc = acc + item.count , 0)
    }
    const totalPrice = () => {
        return cartArray.reduce((acc, element) => acc = acc + (element.item.price*element.count),0)
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.item.id === id)
    }

    const value = {
        cartArray,
        addToCart,
        removeItem,
        clearCart,
        productAcc,
        totalPrice
        
    }
  return (
  <CartContext.Provider value={value}>  
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider;
