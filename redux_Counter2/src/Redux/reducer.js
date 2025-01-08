import { DEC, INC } from "./actionType";

let initial = {
    count : 0,
    count1 : 10
}
export const reducer = (state = initial,{type,payload})=>{
    
    if(type == INC){
        return  {...state,count : state.count + 1}
    }else if(type == DEC){
        return  {...state,count : state.count - 1}
    }else if(type == "TEN"){
         return {...state,count1 : state.count1 + 10}
    
    }else{
        return state;
    }
}