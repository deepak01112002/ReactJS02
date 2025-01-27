import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../Firebase/Fire"

const DataCollection = collection(db,"products")
export const addData = (dispatch)=>async(state)=>{
    dispatch({type : "LOADING"  })
    await addDoc(DataCollection,state)
    alert("Product added succesfully!!!")
    dispatch({type : "SUCCESS"})
}


export const getData = async(dispatch)=>{
    dispatch({type : "LOADING"  })
    let a = await getDocs(DataCollection)
    let d = a.docs.map((el)=>{
        return {id : el.id, ...el.data()}
    })
    dispatch({type : "DATASUCCESS", payload : d })
}


export const deleteData = (dispatch) =>async(id)=>{
      dispatch({type : "LOADING"  })
      let d = doc(db,"products",id)
      await deleteDoc(d)
      dispatch({type : "SUCCESS"})
      getData(dispatch)
}


export const updateData = (dispatch) =>async(id,obj)=>{
    dispatch({type : "LOADING"})
    let d = doc(db,"products",id);
    await updateDoc(d,obj);
    dispatch({type : "SUCCESS"})
    getData(dispatch)
}