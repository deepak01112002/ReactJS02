import React, { useState } from 'react'
import { loginReducer } from '../Redux/LoginReducer/loginReducer'
import { Loginaction } from '../Redux/LoginReducer/action'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const [state,setState] = useState({
            email : "",
            password : ""
        })
        const data = useSelector(store => store)
        console.log(data);
        
        const dispatch = useDispatch()

        const handleChange = (e)=>{
            const {name,value} = e.target
            setState({...state,[name] : value})
        }
        const handleSubmit =  (e)=>{
            e.preventDefault()
            // Loginaction(state.email,state.password,dispatch)
            dispatch(Loginaction)(state.email,state.password)
        }


       
        


  return (
    <div>
         <form action="" onSubmit={handleSubmit}>
              <input type="text" name='email' onChange={handleChange} />
              <input type="text" name='password'  onChange={handleChange}/>
              <input type="submit" />
         </form>
    </div>
  )
}

export default Login