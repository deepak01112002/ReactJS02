import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/Button'

function App() {
  const [count, setCount] = useState(0)
  const [a,seta] = useState(true)

   const inc = useCallback(()=>{
      setCount(count + 1)
   },[count])
  return (
    <>
      <Button inc={inc} count={count}></Button>
      <h1>{a ? "True" : "False"}</h1>
      <button onClick={()=>seta(!a)}>Click</button>
    </>
  )
}

export default App
