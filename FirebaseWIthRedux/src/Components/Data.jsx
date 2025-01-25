import React, { useEffect } from 'react'
import { deleteData, getData } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux';

function Data() {
    const dispatch = useDispatch()
    const st = useSelector(store => store)
    console.log(st);
    useEffect(()=>{
        dispatch(getData)
    },[])
    const handleDelete =(id)=>{
        dispatch(deleteData)(id)
    }
    
  return (
    <div>
        {
            st.data.map((el)=>{
                return <div>
                    <p>{el.title}</p>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                    <button  onClick={()=>handleEdit(el.id)}>Edit</button>
                </div>
            })
        }
    </div>
  )
}

export default Data