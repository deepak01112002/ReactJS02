import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
   const {id}= useParams()
   const [obj,setObj] = useState({})
   const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
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

   useEffect(()=>{
     localStorage.setItem("cart",JSON.stringify(cart))
   },[cart])
   
   const handleCart = ()=>{
       let data = cart.filter((el)=>el.id == id)
       console.log(data);
       if(data.length){
          alert("item already present")
       }else{
         setCart([...cart,{...obj,quantity : 1}])  
       }
      
   }
   
  return (
    <div>
        <h1>{obj.name}</h1>
        <h2>{obj.email}</h2>
        <button onClick={handleCart}>Add To Cart</button>

    </div>
  )
}

export default SingleProduct