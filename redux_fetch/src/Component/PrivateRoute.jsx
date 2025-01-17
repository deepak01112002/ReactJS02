import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const data = useSelector(state => state.loginReducer)
    console.log(data)
  return (
     <div>
        {data.isLogin ? children : <Navigate to="/login" />}
     </div>
  )
}

export default PrivateRoute