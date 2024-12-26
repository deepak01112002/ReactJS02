import React, { useEffect, useState } from 'react'

function Cart() {
   const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
   
   useEffect(()=>{
     localStorage.setItem("cart", JSON.stringify(cart))
   },[cart])

   const handleAddQuantity = (ID,QUANTITY)=>{
     console.log(ID,QUANTITY);
     let data = cart.map((el)=>{
        if(el.id == ID){
          return {...el,quantity : el.quantity + 1}
        }else{
          return el;
        }
     })
     setCart(data)
   }
   
  return (
    <div>
        {
          cart.length == 0 ? <h1>Loading.......</h1> : <div>
            {cart.map((el)=>{
                return <div>
                    <h1>{el.name}</h1>
                    <h2>{el.email}</h2>
                    <button>-</button>
                    <h3>{el.quantity}</h3>
                    <button onClick={()=>handleAddQuantity(el.id,el.quantity)}>+</button>
                </div>
             })}

          </div>
        }
    </div>
  )
}

export default Cart