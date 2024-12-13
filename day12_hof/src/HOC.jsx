import Rotate from "./Components/Spinner"

// Loader COmponent 
const Loader = ({dd})=>{
    return <h1>Loading..... {dd}</h1>
}
const Loader2 = ({dd})=>{
    return <h1>Loading.....Ho raha hai abhi {dd}</h1>
}
// HOC

const HigherOrder = (Product)=>{
   return function ({...props}){
      if(props.dd){
         return <Rotate />
      }
      return <Product {...props} />
   }
}


// Normal COmponent
const ProductList = ({arr,dd})=>{
    return (
        <> 
         <h1>{dd}</h1>
         {
           arr.map((el)=>{
              return <h1>{el.title}</h1>
            })
         }
        </> 
    )
}


export const Deepak = ()=>{
    return <h1>HELLOOOO</h1>
}

export const C = HigherOrder(Deepak)
const A = HigherOrder(ProductList) 

export default A;

