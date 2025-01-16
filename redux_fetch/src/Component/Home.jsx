import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const data = useSelector(state => state.loginReducer)
  return (
    <div>
        <h1>{data.isLogin ? data.user : "Login"}</h1>
    </div>
  )
}

export default Home