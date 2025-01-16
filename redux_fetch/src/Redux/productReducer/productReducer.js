
let initial = {
    isLoading : false,
    isError : false,
    data : []
}


const productReducer = (state = initial,{payload,type})=>{
     switch(type){
         case "LOADING":
            return {...state,isLoading : true}
         case "SUCCESS":
             return {...state,isLoading : false, data : payload}
         case "ERROR" : 
             return {...state,isLoading :false, isError : true}
         default : return state           
     }
}

export default productReducer