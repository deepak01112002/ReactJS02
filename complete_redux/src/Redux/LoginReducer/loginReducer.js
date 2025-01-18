import { LOGINERROR, LOGINLOADING, LOGINSUCCESS } from "./actionType"

let initial = {
    isLogin : false,
    isError : false,
    isLoading : false,
    user : ""
}



export const loginReducer = (state = initial,{type,payload})=>{
    switch(type){
        case LOGINLOADING:
            return {...state,isLoading : true}
        case LOGINSUCCESS :
            return {...state,isLoading : false, isLogin : true, user : payload}  
        case LOGINERROR :
             return {...state,isLoading : false, isError : true}
        default : return state           
    }

}