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
        
        axios.post('http://localhost:3000/users',state)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder='Username'  name='username'/>
            <input type="text" onChange={handleChange} placeholder='Email' name='email' />
            <input type="text" onChange={handleChange} placeholder='Password' name='password' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup