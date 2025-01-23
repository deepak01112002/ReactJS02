import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from './firebase/fire'

function App() {
   const [email,setEmail] = useState("")
   const [password,setPassword]  = useState("")
   const [state,setState] = useState([])
   const [edit,setEdit] = useState(null)

   const UserCollection = collection(db,"users")
    useEffect(()=>{
      getData()
    },[])

   const getData = async()=>{
        let data = await getDocs(UserCollection)
        console.log(data);
        
        let a = data.docs.map((el)=>{
            // console.log(el.id)
            // console.log(el.data())
            return {id : el.id,  ...el.data()}
        })
        setState(a)
   }

   const handleSubmit = async (e)=>{
    e.preventDefault()
    let obj = {
       email,
       password
    }
    if(edit == null){
      await addDoc(UserCollection,obj)
      alert("User added Successfully")
    }else{
      let data = doc(db,"users",edit)
      await updateDoc(data,obj)
    }
    setEmail("")
    setPassword("")
    setEdit(null)
    getData()
   }

   const handleDelete=async(id)=>{
       let del = doc(db,"users", id)
       
       await deleteDoc(del)
       getData()
   }

   const handleEdit = (i)=>{
    // console.log(state)
    //  console.log(id);
     setEdit(i)
     state.forEach((el)=>{
        if(el.id == i){
          setEmail(el.email)
          setPassword(el.password)
        }
     })
     
   }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
         <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
         <input type="submit" />
      </form>
      {
        state.map((el)=>{
          return <>
               <h1>{el.email} - {el.password}</h1>
               <button onClick={()=>handleEdit(el.id)}>Edit</button>
               <button onClick={()=>handleDelete(el.id)}>Delete</button>
          </>
        })
      }
    </>
  )
}

export default App
