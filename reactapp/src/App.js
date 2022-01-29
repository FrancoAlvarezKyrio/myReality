import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import './Styles.scss'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Cart from './containers/Cart';
import CartProvider from './contexts/CartContext'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';


const App = () => {
    return (
        
          <CartProvider id="body">
            <BrowserRouter>
                <NavBar/>
                <Header/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path="/cat/:id" element={<ItemListContainer/>} />
                        <Route path="/item/:id" element={<ItemDetailContainer/>} />    
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>
                <Footer/> 
                <ToastContainer autoClose={2000}/>
            </BrowserRouter>
          </CartProvider>
    ); 
};

export default App;