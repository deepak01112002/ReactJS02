import React,  {useEffect, useState } from 'react'
import ProductList from './ProductList'

function ProductForm() {
    const [product,setProduct] = useState({
        title : "",
        price : "",
        des : "",
        image : ""
    })
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(arr))
    },[arr])

    const handleInputChange = (e)=>{
          const {name,value} = e.target
          setProduct({...product,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        setArr([...arr,product])

   
        

        setProduct({
            title : "",
            price : "",
            des : "",
            image : ""
        })
    }
    console.log(arr)
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
             <input type="text" value={product.title} placeholder='Title' name='title' onChange={handleInputChange}/>
             <input type="text" placeholder='Price' value={product.price} name='price' onChange={handleInputChange}/>
             <input type="text" placeholder='Description' value={product.des} name='des' onChange={handleInputChange}/>
             <input type="text" placeholder='Image URL' value={product.image} name='image' onChange={handleInputChange}/>
             <input type="submit" />
        </form>
        <ProductList arr={arr}/>
    </div>
  )
}

export default ProductForm