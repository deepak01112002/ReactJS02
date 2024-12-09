import { useState } from 'react'
import "./App.css"
function App() {
  
  const [form,setform] = useState({
    email : "",
    password : "",
    hobbie : [""]
  })
  const [emailErr, SetEmailErr] = useState(false)
  const [passErr,setPassErr] = useState(false)

   
  const handleChange = (e)=>{
      const {name,value,dataset} = e.target
      
      if(name == "hobbie"){
         let arr = [...form.hobbie]
         arr[dataset.index] = value
         setform({...form, hobbie : arr})
      }else{
        setform({...form, [name] : value})
      }

      
        

  }
  console.log(form)
  const handleSubmit = (e)=>{
      e.preventDefault()
      if(emailErr || passErr){
         alert("Mat kar chunauti")
      }else{
        alert("Form submit")
      }
  }
  const handleBlur = (e)=>{
      const {name,value} = e.target
      if(name == "email" && value.length < 5){
           SetEmailErr(true)
      }
      if(name == "password" && value.length < 8){
          setPassErr(true)
      }
  }

  const handleFocus = (e)=>{
      const {name} = e.target
      if(name == "email"){
        SetEmailErr(false)
      }
  }
  
  const handleadd = ()=>{
    setform({...form,hobbie : [...form.hobbie , ""]})
  }


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
            <input type="text" name='email' placeholder='Email Id' onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} style={{borderColor : emailErr==true ? "red" : "" }} /> <br />
            {emailErr==true ? <p>Error !!!1</p> : ""}
            <input type="text" name='password' placeholder='Password' onChange={handleChange} onBlur={handleBlur} /> <br />
             <input type="button" value="add" onClick={handleadd} />
             {
              form.hobbie.map((el,index)=>{
                return <>
                <input type="text" name='hobbie' placeholder='Hobbies' onChange={handleChange} data-index={index} /> <br/>
                </>
              })
             }
             
            <input type="submit" />
            
      </form>
    </>
  )
}

export default App
