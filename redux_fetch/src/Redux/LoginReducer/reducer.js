

let initial = {
    isLogin : false,
    user : "",
    isLoading : false,
    isError : false
}


export const loginReducer = (state = initial,{type,payload})=>{
    switch(type){
       case "LOADING" :
           return {...state,isLoading : true}
       case "SUCCESS" : 
           return {...state,isLoading : false, isLogin : true, user : payload}
       case "ERROR" : 
           return {...state,isLoading : false,isError : true}
        default : return state   
    }
}