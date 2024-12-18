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
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const [edit,setEdit] = useState("")

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(arr))
    },[arr])

    const handleInputChange = (e)=>{
          const {name,value} = e.target
          setProduct({...product,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(edit == ""){
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
     }else {
        let a = arr.map((el)=>{
            if(el.id == edit){
                return {...el,...product}
            }else{
                return el;
            }
         })
         setArr(a)
         setEdit("")
         setProduct({
            title : "",
            price : "",
            des : "",
            image : ""
        })
     }
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
        setEdit(Editid)
        arr.forEach((el)=>{
            if(el.id == Editid){
                setProduct({...product,...el})
            }
        })
         
     }
     const EditData = ()=>{
         let a = arr.map((el)=>{
            if(el.id == edit){
                return {...el,...product}
            }else{
                return el;
            }
         })
         setArr(a)
         setEdit("")
         setProduct({
            title : "",
            price : "",
            des : "",
            image : ""
        })
     }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
             <input type="text" value={product.title} placeholder='Title' name='title' onChange={handleInputChange}/>
             <input type="text" placeholder='Price' value={product.price} name='price' onChange={handleInputChange}/>
             <input type="text" placeholder='Description' value={product.des} name='des' onChange={handleInputChange}/>
             <input type="text" placeholder='Image URL' value={product.image} name='image' onChange={handleInputChange}/><br />
             {/* {edit == "" ? "" : <input type='button' value="Edit" onClick={EditData}/>} */}
             <input type="submit" value={edit == "" ? "submit" : "Edit"} />
             
        </form>
        <ProductList arr={arr} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default ProductForm