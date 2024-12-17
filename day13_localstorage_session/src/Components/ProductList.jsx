import React from 'react'

function ProductList({arr,handleDelete, handleEdit}) {
   
  return (
    <div>
        {
          arr.map((el)=>{
            return <div key={el.id}>
                 <img  src={el.image} alt="" width={"250px"} />
                 <h3>{el.title}</h3>
                 <p>₹{el.price} - {el.des}</p>
                 <button onClick={()=>{handleDelete(el.id)}}>Delete</button>
                 <button onClick={()=>handleEdit(el.id)}>Edit</button>
            </div>
          })
        }
    </div>
  )
}

export default ProductList