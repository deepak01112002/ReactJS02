import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
    const [state,setState] = useState({
        username : "",
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/users",state)
        .then((Res)=>{
            console.log(Res);
            alert("User Registered Successfully")
        })
        .catch((Err)=>{
            console.log(Err.message);
        })
    }
  return (
    <div>
         <form action="" onSubmit={handleSubmit}>
              <input type="text" name='username'  onChange={handleChange} />
              <input type="text" name='email' onChange={handleChange} />
              <input type="text" name='password'  onChange={handleChange}/>
              <input type="submit" />
         </form>
    </div>
  )
}

export default Signup