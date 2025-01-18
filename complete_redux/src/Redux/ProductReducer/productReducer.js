import { ERROR, LOADING, SUCCESS } from "./actionType";


let initial = {
    isLoading : false,
    isError : false,
    data : []
}

export const productReducer = (state = initial,{type,payload})=>{
    switch(type){
        case LOADING:
           return {...state,isLoading : true}
        case  SUCCESS :
            return {...state,isLoading : false,data : payload}
        case ERROR : 
            return {...state, isLoading : false, isError : true}
        default : return state        
    }
}