import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SingleProduct from '../Pages/SingleProduct'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import NotFound from '../Pages/NotFound'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product/:id' element={<SingleProduct/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter