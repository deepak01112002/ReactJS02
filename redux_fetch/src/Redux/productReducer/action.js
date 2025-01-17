import axios from "axios"



export const fetchData = (dispatch)=>{
    axios.get(`http://localhost:3000/products`)
     .then((res)=>{
        dispatch({type : "SUCCESS", payload : res.data})
     })
     .catch((err)=>{
      dispatch({type : "ERROR"})
     })
}