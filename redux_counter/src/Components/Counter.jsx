import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from '../Redux/actionType'

function Counter() {

   const data = useSelector((store)=>store)
   const dispatch = useDispatch()
   
   const handleInc = ()=>{
      dispatch({type : INC})
   }
   const handleDec = ()=>{
      dispatch({type : DEC})
   }


  return (
    <div>
       <h1>Counter  -- {data}</h1>
       <button onClick={handleInc}>+</button>
       <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Counter