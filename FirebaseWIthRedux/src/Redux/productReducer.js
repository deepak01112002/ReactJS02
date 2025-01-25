
let initial = {
    isLoading : false,
    isError : false,
    isSuccess : false,
    data : []
}

export const reducer = (state=initial,{type,payload})=>{
    switch(type){
        case "LOADING" :
            return {...state,isLoading : true}
        case "SUCCESS" : 
            return {...state,isLoading:false,isSuccess : true}
        case "DATASUCCESS" :
            return {...state,isLoading : false, data : payload}    
       default : return state
    }
}