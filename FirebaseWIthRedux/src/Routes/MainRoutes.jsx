import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Data from '../Components/Data'
import Form from '../Components/Form'
import EditForm from '../Components/EditForm'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Data/>}></Route>
            <Route path='/add' element={<Form/>}></Route>
            <Route path='/edit/:id' element={<EditForm/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes