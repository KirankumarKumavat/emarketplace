import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Products';
import ProductDetails from './component/ProductDetails';
import Contact from './component/Contact';
import About from './component/About';
import Cart from './component/Cart';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/ProductDetails/:id" element={<ProductDetails/>} />
      </Routes>
    </>
  );
}

export default App;
