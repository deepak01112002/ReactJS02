import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  let [state,setState] = useState("100")
  return (
    <div className="App">
        <h1>Name : {state}</h1>
        <h1></h1>
    </div>
  );
}

export default App;
