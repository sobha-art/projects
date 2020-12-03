import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductContextProvider from './Global/ProductsContext';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <ProductContextProvider />
     <Products />
    </div>
  );
}

export default App;
