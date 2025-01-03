import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

import ProductForm from '../Pages/ProductForm'
import PrivateRoute from '../Componet/PrivateRoute'
import ProductList from '../Pages/ProductList'
import EditProduct from '../Pages/EditProduct'
function MainRouter() {
  return (
    <div>
        <Routes>
              <Route path='/' element={
                <PrivateRoute>
                   <Home/>
                </PrivateRoute>
                }></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/product' element={
              // <PrivateRoute>
                <ProductForm/>
              // </PrivateRoute> 
                }></Route>
                <Route path='/allProduct' element={<ProductList/>}></Route>
                <Route path='/edit/:id' element={<EditProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter