import axios from 'axios'
import React, { useEffect } from 'react'

function Product() {
  useEffect(()=>{
     
     axios.get(`http://localhost:3000/products`)
     .then((res)=>{
        dispatch({type : "SUCCESS", payload : res.data})
     })
     .catch((err)=>{
      dispatch({type : "ERROR"})
     })
  },[])
  return (
    <div>Product</div>
  )
}

export default Product