
import {useState} from "react"

function KoiBhi(){
    const [state,setState] = useState(0)
    function increase(){
        setState(state + 1)
    }
    
    function decrease(){
        setState(state - 1)
    }
  return (
     <div>
        <h1>{state}</h1>
        <button onClick={increase}>+</button>
        <button disabled={state == 0} onClick={decrease}>-</button>
     </div>
  )
}

export default KoiBhi;