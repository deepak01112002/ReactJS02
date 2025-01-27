import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Data() {
    const dispatch = useDispatch()
    const [edit,setEdit] = useState(null)
    const st = useSelector(store => store)
    const navigate = useNavigate()

    console.log(st);
    useEffect(()=>{
        dispatch(getData)
    },[])
    const handleDelete =(id)=>{
        dispatch(deleteData)(id)
    }
    const handleEdit = (id)=>{
        setEdit(id)
    //    navigate(`/edit/${id}`)
    }
    
  return (
    <div>
        {
          edit != null ?  <form action="">
                 <input type="text" value={"Edit"} />
            </form> : ""
        }
        {
            st.data.map((el)=>{
                return <div>
                    <img src={el.img} alt="" width={250}/>
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