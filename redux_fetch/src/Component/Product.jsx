import axios from 'axios'
import React, { useEffect } from 'react'
import { fetchData } from '../Redux/productReducer/action'
import { useDispatch, useSelector } from 'react-redux'

function Product() {
   const dispatch = useDispatch()
   const data = useSelector(store=>store.productReducer)
   
  useEffect(()=>{
     
    fetchData(dispatch)
    
  },[])
  return (
    <div>Product</div>
  )
}

export default Product