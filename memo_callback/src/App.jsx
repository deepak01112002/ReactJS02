import { useMemo, useState } from 'react'

function App() {
   
    const [state,setState] = useState(100)
    const [a,seta] = useState(true)

   const calculation = useMemo(()=>{   
    console.log("Calculating ........")
    return state * state
  },[state])

  return (
    <>
      <h1>Calculation : {calculation}</h1>
      <h1>{a ? "True" : "False"}</h1>
      <button onClick={()=>seta(!a)}>Click</button>
      <button onClick={()=>setState(state + 1)}>state</button>
    </>
  )
}

export default App
