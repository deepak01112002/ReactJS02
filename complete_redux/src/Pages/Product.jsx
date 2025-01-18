import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/ProductReducer/action'

function Product() {
    const data = useSelector(store=>store)
    console.log(data);
    
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchData)
    },[])
    
  return (
    <div>Product</div>
  )
}

export default Product