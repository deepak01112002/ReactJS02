import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {
  const [arr,setarr] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setarr(res)
      })
      .catch((Err) => {
        console.log(Err);
      })

  },[])
  return (
    <div>
       {
        arr.map((el)=>{
          return <Link to={`/product/${el.id}`}>
          <div key={el.id}>
               <h1>{el.name}</h1>
               <h2>{el.email}</h2>

          </div></Link>
        })
       }
       
    </div>
  )
}

export default Product