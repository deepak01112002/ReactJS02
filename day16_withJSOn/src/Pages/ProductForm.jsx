import React, { useState } from 'react'

function ProductForm() {

  const [form,setform] = useState({
    Title : '',
    ImageURL : ''
  })
  const handleChange = (e)=>{
    const {name, value} = e.target
    setform({...form,[name] : value})
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      fetch(`http://localhost:3000/products`,{
        method : "POST",
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify(form)
      })
      .then((Res)=>Res.json())
      .then((Res)=>{
        console.log(Res);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' name='Title' onChange={handleChange} />
          <input type="text" name='ImageURL' placeholder='ImageURL' onChange={handleChange} />
          <input type="submit" />
      </form>
    </div>
  )
}

export default ProductForm