import React,  {useEffect, useState } from 'react'
import { v4 } from 'uuid';
import ProductList from './ProductList'

function ProductForm() {
    const [product,setProduct] = useState({
        id : v4(),
        title : "",
        price : "",
        des : "",
        image : ""
    })
    const [arr,setArr] = useState(JSON.parse(sessionStorage.getItem("data")) || [])

    useEffect(()=>{
        sessionStorage.setItem("data", JSON.stringify(arr))
    },[arr])

    const handleInputChange = (e)=>{
          const {name,value} = e.target
          setProduct({...product,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        let obj = {
            ...product,
            id : v4()
        }
        setArr([...arr,obj])
        setProduct({
            title : "",
            price : "",
            des : "",
            image : ""
        })
    }
    const handleDelete = (deleteid) =>{
        let a = arr.filter((el)=>{
           if(el.id != deleteid){
            return el;
           }
        })
        setArr(a)
     }
     const handleEdit = (Editid)=>{
        console.log(Editid)
     }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
             <input type="text" value={product.title} placeholder='Title' name='title' onChange={handleInputChange}/>
             <input type="text" placeholder='Price' value={product.price} name='price' onChange={handleInputChange}/>
             <input type="text" placeholder='Description' value={product.des} name='des' onChange={handleInputChange}/>
             <input type="text" placeholder='Image URL' value={product.image} name='image' onChange={handleInputChange}/>
             <input type="submit" />
        </form>
        <ProductList arr={arr} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default ProductForm