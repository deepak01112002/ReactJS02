import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from '../Pages/About'
import Product from '../Pages/Product'
function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path ="/product" element={<Product/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute