import React, { useState } from 'react'
import { addData } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

function Form() {
    const dispatch = useDispatch()
    const st = useSelector(store => store)
    console.log(st);
    
    const [state,setState] = useState(
        {
            title : "",
            des : "",
            img : ""
        }
    )
    const hanldeChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
           e.preventDefault()
           console.log(state);
           dispatch(addData)(state)

        //    await addDoc
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='TItle' onChange={hanldeChange}/>
            <input type="text" name='des' placeholder='Description' onChange={hanldeChange}/>
            <input type="text" name='img' placeholder='Image' onChange={hanldeChange}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form