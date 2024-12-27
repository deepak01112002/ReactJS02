import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [form,setform] = useState({
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
     fetch(`http://localhost:3000/users?email=${form.email}`)
     .then((res)=>res.json())
     .then((Res)=>{
     if(Res.length > 0){   
        if(Res[0].password == form.password){
            alert("login Successfull")
            localStorage.setItem("isLogIn", true)
            navigate("/")
        }else{
            alert("Wrong Password")
        }
    }else{
        alert("User not Registered")
    }
     
       
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
            <input type="text" name='email' value={form.email}  onChange={handleInputChange}/>
            <input type="text" name='password' value={form.password} onChange={handleInputChange} />
            <input type="submit" />
         </form>
    </div>
  )
}

export default Login