import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'
function MainRouter() {
  return (
    <div>
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/product' element={<Product/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter