import React, { useEffect, useState } from 'react'
import EditProduct from './EditProduct'
import { useNavigate } from 'react-router-dom'

function ProductList() {
    const [arr,setarr] = useState([])
    const [bool,setbool] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:3000/products`)
     .then((res)=>res.json())
     .then((Res)=>{
       
        setarr(Res);
        
       
     })
     .catch((err)=>{
       console.log(err);
       
     })  
    },[arr])
    const handleDelete = (id)=>{
      fetch(`http://localhost:3000/products/${id}`,{
        method : 'DELETE'
      })
      .then((res)=>res.json())
      .then((Res)=>{
        console.log(Res);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })  
    }
    const handleEdit = (id)=>{
      localStorage.setItem("Editid", id)
      navigate("/editProduct")
      
    }
  return (
    <div>
        {
          arr.map((el)=>(
             <div key={el.id}>
                 <h1>{el.Title}</h1>
                 <img src={el.ImageURL} alt={el.Title} /><br />
                 <button onClick={()=>handleEdit(el.id)} >Edit</button>

                 {/* {bool == true ? <EditProduct/> : ""} */}
                 <button onClick={()=>{handleDelete(el.id)}}>Delete</button>
             </div>
          ))
        }
    </div>
  )
}

export default ProductList