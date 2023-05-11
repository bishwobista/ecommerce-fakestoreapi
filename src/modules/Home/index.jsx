import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import FeatureCard from '../../components/FeatureCard'
import StatCard from '../../components/StatCard'
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await fetch('http://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  

  return (
    <>
    <Hero/>
    <div className="flex flex-col text-center w-full mt-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            PRODUCTS
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            POPULAR PRODUCTS
          </h1>
        </div>
        {
        products.length > 0 ? 
        <Products products={products} /> 
        :
        <div>Loading.....</div>
      }
    <Products/>
    <FeatureCard/>
    <StatCard/>
    </>
  )
}

export default Home