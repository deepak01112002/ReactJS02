import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter1() {
    const data = useSelector(title=>title)
    console.log(data)
    const dispatch = useDispatch()
  return (
    <div>
         <h1>{data.count1}</h1>
        <button onClick={()=>dispatch({type : "TEN"})}>+10</button>
    </div>
  )
}

export default Counter1