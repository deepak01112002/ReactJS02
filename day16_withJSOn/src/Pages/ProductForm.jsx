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

  return (
    <div>
      <form action="">
          <input type="text" name='Title' onChange={handleChange} />
          <input type="text" name='ImageURL' onChange={handleChange} />
          <input type="submit" />
      </form>
    </div>
  )
}

export default ProductForm