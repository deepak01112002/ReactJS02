import React, { useEffect, useState } from 'react'

function Product() {
    const [product,setProduct] = useState([])
    const [filterData,setFilterData] = useState([])
    const [sortval,setSort] = useState("")
    const [filterval,setfilter] = useState("")
    const [search,setSearch] = useState("")

     
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((res)=>{
           setProduct(res);
           setFilterData(res)
        })
        .catch((Err)=>console.log(Err)) 
    },[])
    
    useEffect(()=>{
      let arr = [...product]
      if(sortval == "asc"){
         arr = arr.sort((a,b) => a.price - b.price)
      }else if (sortval == "des"){
         arr = arr.sort((a,b)=> b.price - a.price)
      }else{
         arr = product
      }
      
      if(filterval != ""){
        arr = arr.filter((el)=>{
            return el.category == filterval
         })
      }
       
       if(search != ""){
           arr = arr.filter((el)=>{
            return el.title.toLowerCase().includes(search.toLowerCase())
           })
       }
       

      setFilterData(arr)
      
    },[sortval,filterval,search])


  return (
    <div>
        <h1>Products</h1>
         <input type="text" onChange={(e)=>setSearch(e.target.value)} />
         <select name="" id="" onChange={(e)=>setSort(e.target.value)}>
              <option value="">Sort By Price</option>
              <option value="asc">Low To High</option>
              <option value="des">High To Low</option>
         </select>
         <select name="" id="" onChange={(e)=>setfilter(e.target.value)}>
               <option value="">Select Category</option>
               <option value="men's clothing">Men's Clothing</option>
               <option value="women's clothing">Women's Cloting</option>
               <option value="jewelery">Jewelery</option>
               <option value="electronics">Electronics</option>
         </select>
        {
          filterData && filterData.map((el)=>(
              <div>
                  <img src={el.image} width={"200px"}/>
                  <h3>{el.title}</h3>
                  <h3>₹ {el.price}</h3>
              </div>
          ))
        }
    </div>
  )
}

export default Product