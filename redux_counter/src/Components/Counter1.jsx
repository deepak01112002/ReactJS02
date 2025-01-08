import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter1() {
    const data = useSelector((store)=>store)
    const dispatch = useDispatch()
  return (
    <div>
       <h1>couter 2 - {data}</h1>
       <button onClick={()=>{dispatch({type : "INC10", payload : 50})}}>+userData</button>
    </div>
  )
}

export default Counter1