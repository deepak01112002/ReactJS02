import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../Pages/Home'

function PrivateRoute({children}) {

  return (
    <div>
        {localStorage.getItem("isLogIn") ? children  : <Navigate to={"/login"}/>    }
    </div>
  )
}

export default PrivateRoute