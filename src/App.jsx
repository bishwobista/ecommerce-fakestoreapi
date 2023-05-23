import React from 'react'

import Header from './components/Header'
import Home from './modules/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Product from './modules/Product'
import Cart from './modules/Cart'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/ecommerce-fakestoreapi' element={<Home/>}/>
        <Route path='/ecommerce-fakestoreapi/products/:id' element={<Product/>}/>
        <Route path='/ecommerce-fakestoreapi/cart' element={<Cart/>}/>
      </Routes>
      
      <Footer/>
      
    </>
  )
}

export default App
