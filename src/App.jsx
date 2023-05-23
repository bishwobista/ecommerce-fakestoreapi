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
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
