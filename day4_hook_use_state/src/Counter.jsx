import { useState } from "react"
import Counter2 from "./Counter2"


function Counter(props){
    
    return (
        <div>{props.a}
        
         <Counter2 a={props.a}/>
        </div>
    )
}

export default Counter