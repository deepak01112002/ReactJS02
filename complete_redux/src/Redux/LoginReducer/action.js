import axios from "axios"
import { LOGINERROR, LOGINLOADING, LOGINSUCCESS } from "./actionType"


export const Loginaction = (dispatch)=>(userEmail,userPassword)=>{
     dispatch({type : LOGINLOADING})
     axios.get(`http://localhost:3000/users?email=${userEmail}`)
     .then((Res)=>{
         if(Res.data[0].password == userPassword){
            dispatch({type : LOGINSUCCESS , payload : Res.data[0].username})
            alert("User Login Successfull")

         }else{
            alert("Password Wrong")
         }
     })
     .catch((err)=>{
         dispatch({type : LOGINERROR})
         alert("Invalid Ceredentials")
     })
}