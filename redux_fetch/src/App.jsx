import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Component/Signup'
import Login from './Component/Login'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './Routes/Navbar'

function App() {
 

  return (
    <>
      <Navbar/>
      <MainRoutes/>
    </>
  )
}

export default App
