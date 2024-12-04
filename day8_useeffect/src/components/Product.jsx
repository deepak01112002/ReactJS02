import React from 'react'
import ProductList from './ProductList'
import { useState, useEffect } from 'react'
function Product() {
    const [arr, setarr] = useState([])
  

  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products`)
     .then((res)=>res.json())
     .then((res)=>{
      setarr(res)
     })
     .catch((err)=>{
      console.log(err)
     })
  },[])

  return (
    <div>
       <ProductList data={arr}/>
       {/* {
          arr.map((el)=>{
              return <ProductList key={el.id} img={el.image} title={el.title} price={el.price}/>
          })
         } */}
    </div>
  )
}

export default Product