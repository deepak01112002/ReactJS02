import React, { useEffect, useState } from 'react'

function ProductList() {
    const [arr,setarr] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/products`)
     .then((res)=>res.json())
     .then((Res)=>{
       
        setarr(Res);
        
       
     })
     .catch((err)=>{
       console.log(err);
       
     })  
    },[])

  return (
    <div>
        
    </div>
  )
}

export default ProductList