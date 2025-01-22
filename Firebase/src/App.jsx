import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from './firebase/fire'

function App() {
   const [email,setEmail] = useState("")
   const [password,setPassword]  = useState("")
   const [state,setState] = useState([])

   const UserCollection = collection(db,"users")
    useEffect(()=>{
      getData()
    },[])

   const getData = async()=>{
        let data = await getDocs(UserCollection)
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
    await addDoc(UserCollection,obj)
    getData()
    alert("User added Successfully")
   }

   const handleDelete=async(id)=>{
       let del = doc(db,"users", id)
       await deleteDoc(del)
       getData()
   }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
         <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
         <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
         <input type="submit" />
      </form>
      {
        state.map((el)=>{
          return <>
               <h1>{el.email} - {el.password}</h1>
               <button>Edit</button>
               <button onClick={()=>handleDelete(el.id)}>Delete</button>
          </>
        })
      }
    </>
  )
}

export default App
