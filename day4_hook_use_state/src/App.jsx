import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from "./Counter"

function App() {
  const[count,setCount] = useState(10)
  function increase(){
    setCount(count + 1)
  }
  function decrease(){
    setCount(count - 1)
  }
  return (
    <div className="App">
       <Counter a={count} />
       <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
