import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/Fire'
import { doc, getDoc } from 'firebase/firestore'
import { updateData } from '../Redux/action'

function EditForm() {
    const dispatch = useDispatch()
    const st = useSelector(store => store)
    const {id} = useParams()
    console.log(id);
    
    const [state,setState] = useState(
        {
            title : "",
            des : "",
            img : ""
        }
    )
    useEffect(()=>{
    //    st.data.forEach((el)=>{
    //     if(el.id == id){
    //         setState(el)
    //     }
    //    })
    async function d(){
        let docRef = doc(db,"products",id)
        let data = await getDoc(docRef)
        
        setState({id : data.id,...data.data()})
    }
    d()

    },[])
    const hanldeChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
           e.preventDefault()
           dispatch(updateData)(id,state)
    }
  return (
    <div>
         <form action="" onSubmit={handleSubmit}>
            <input type="text" value={state.title} name='title' placeholder='TItle' onChange={hanldeChange}/>
            <input type="text" value={state.des} name='des' placeholder='Description' onChange={hanldeChange}/>
            <input type="text" name='img' value={state.img} placeholder='Image' onChange={hanldeChange}/>
            <input type="submit" value={"Edit"} />
        </form>
    </div>
  )
}

export default EditForm