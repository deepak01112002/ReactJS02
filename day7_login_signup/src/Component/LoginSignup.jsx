import React, { useState } from 'react'

function LoginSignup() {
    const [state,setState] = useState(0)
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [LoginEmail,setLoginEmail] = useState("")
    const [LoginPassword,setLoginPassword] = useState("")
    const [arr,setArr] = useState([])
    const fun = (e)=>{
      setUsername(e.target.value)
    }
    const handleClick = ()=>{
        let obj = {
            username ,
            email,
            password
        }
         setArr([...arr,obj])
        alert("Signup Successfull")
        setState(0)
    }
    const handleLoginClick = ()=>{
         let a = arr.filter((el)=>{
              if(el.email == LoginEmail && el.password == LoginPassword){
                return el;
              }
          })
          if(a.length > 0){
             alert("Login Successfull")
            
          }else{
             alert("Wrong Credential!!")
          }
          setLoginEmail("")
          setLoginPassword("")
    }
  return (
    <div>
         {state == 0 ? <div>
            <h1>Login</h1>
             <input type="text" placeholder='Email' value={LoginEmail}  onChange={(dee)=>{setLoginEmail(dee.target.value)}} /><br />
             <input type="text" placeholder='Password' value={LoginPassword} onChange={(pass)=>{setLoginPassword(pass.target.value)}}  /><br />
             <button onClick={handleLoginClick}>Signup</button><br />
            <span onClick={()=>{setState(1)}}>Create an account !</span>
         </div> : <div>
             <h1>Signup</h1>
             <input type="text" placeholder='Username' onChange={fun} /><br />
             <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} /><br />
             <input type="text" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}  /><br />
             <button onClick={handleClick}>Signup</button><br />
             <span onClick={()=>{setState(0)}}>Already an account !</span>
            </div>}
    </div>
  )
}

export default LoginSignup