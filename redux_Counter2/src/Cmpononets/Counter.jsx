import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from '../Redux/actionType'

function Counter() {

    const data = useSelector((st)=>st)
    const dispatch = useDispatch()
  return (
    <div>
       <h1>{data.count}</h1>
       <button onClick={()=>dispatch({type : INC})}>+</button>
       <button onClick={()=>dispatch({type : DEC})}>-</button>
    </div>
  )
}

export default Counter