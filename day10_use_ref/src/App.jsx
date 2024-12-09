import { useState ,useRef, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
   const [state,setState] = useState([])
  
  const val = useRef(null)
  const val2 = useRef(null)
  const val3 = useRef(null)
  const handleSubmit = (e)=>{
      e.preventDefault()
     let obj = {
        name : val.current.value,
        title : val2.current.value,
        price : val3.current.value
     }
     setState([...state,obj])
     
  }
  console.log(state)

  return (
    <>
       {/* <h1>{state}</h1> */}
    <form action="" onSubmit={handleSubmit}>
      <input type="text" id='head' ref={val}  />
      <input type="text" id='head' ref={val2} />
      <input type="text" id='head' ref={val3} />
      <input type="submit" />
    </form>   
    </>
  )
}

export default App
