import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./actionType"




export const fetchData = (dispatch)=> {
    dispatch({type : LOADING})
    axios.get(`https://fakestoreapi.com/products`)
    .then((Res)=>{
        dispatch({type : SUCCESS, payload : Res.data})
    })
    .catch((err)=>{
        dispatch({type : ERROR})
    })
}