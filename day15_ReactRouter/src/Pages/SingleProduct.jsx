import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
   const {id}= useParams()
   const [obj,setObj] = useState({})
   useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((res)=>{
          return res.json()
       })
       .then((res)=>{
          setObj(res);
          
       })
       .catch((err)=>{
         console.log(err);
       })
   },[])
   
   
  return (
    <div>
     
               <h1>{obj.name}</h1>
               <h2>{obj.email}</h2>

         
    </div>
  )
}

export default SingleProduct