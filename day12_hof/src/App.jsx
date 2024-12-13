import React, { useEffect, useState } from 'react'
import "./App.css"
import A, { C, Deepak } from './HOC'
const App = () => {
  const [arr,setArr] = useState([])
  const [state,setState] = useState(true)
  useEffect(()=>{
    //  setTimeout(()=>{
    //      setArr(["a" , "b", "c"])
    //      setState(false)
    //  },5000)

    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      
      setArr(res)
      setState(false)
    })
    .catch((err)=>{
     console.log(err)
    })
  },[])
  return (
    <div>
       <A arr={arr} dd={state} />
    </div>
  )
}

export default App