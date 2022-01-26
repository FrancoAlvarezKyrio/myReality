import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import './Styles.scss'
import { BrowserRouter, Routes , Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path="/cat/:id" element={<ItemListContainer/>} />
                        <Route path="/item/:id" element={<ItemDetailContainer/>} />    
                    </Routes>
                <Footer/> 
            </BrowserRouter>
        </div>
    );
};

export default App;