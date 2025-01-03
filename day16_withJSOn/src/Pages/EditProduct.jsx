import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [form,setform] = useState({
      Title : '',
      ImageURL : ''
  })

  useEffect(()=>{
    fetch(`http://localhost:3000/products/${id}`)
    .then((res)=>res.json())
    .then((Res)=>{
        setform(Res);
    })
    .catch((Err)=>console.log(Err))
  },[])

    const handleChange = (e)=>{
      const {name, value} = e.target
      setform({...form,[name] : value})
    }
   
  const handleEdit = (e)=>{
     e.preventDefault()
    fetch(`http://localhost:3000/products/${id}`,{
      method : "PUT",
      headers : {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify(form)
    })
    .then((res)=>res.json())
    .then((Res)=>{
       
    })
    .catch((Err)=>console.log(Err))

    navigate("/allProduct")
  }
  
  return (
    <div>
      <form onSubmit={handleEdit}>
          <input type="text" placeholder='Title' value={form.Title} name='Title' onChange={handleChange} />
          <input type="text" name='ImageURL' value={form.ImageURL} placeholder='ImageURL' onChange={handleChange} />
          <input type="submit" />
      </form>
    </div>
  )
}

export default EditProduct