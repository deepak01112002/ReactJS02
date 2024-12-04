import React from 'react'

function ProductList({data}) {
  return (
    <div>
        {
          data.map((el,index)=>{
              return <div key={index}>
                   <img src={el.image} alt="" width="250px"/>
                   <h1>{el.title} - ₹ {el.price}</h1>
                   <button>Click</button>
              </div>
          })
         }
    </div>
  )
}

export default ProductList