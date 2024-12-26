import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const [form,setform] = useState({
     username : '',
     email : '',
     password : ''
  })
  const navigate = useNavigate()

  const handleInputChange = (e)=>{
      const {name,value} = e.target
      setform({...form,[name] : value})
  }
   
  const handleSubmit = (e)=>{
      e.preventDefault()
      fetch(`http://localhost:3000/users`,{
        method : "POST",
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(form)
      })
      .then((res)=>res.json())
      .then((Res)=>{
         
        navigate("/login")
        
      })
      .catch((err)=>{
        console.log(err);
        
      })

      setform({
         username : "",
         email : "",
         password : ""
      })
  }

  
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type="text" name='username' value={form.username} onChange={handleInputChange} />
            <input type="text" name='email' value={form.email}  onChange={handleInputChange}/>
            <input type="text" name='password' value={form.password} onChange={handleInputChange} />
            <input type="submit" />
         </form>
    </div>
  )
}

export default Signup