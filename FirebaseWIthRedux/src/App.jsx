import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Data from './Components/Data'
import Navbar from './Routes/Navbar'
import MainRoutes from './Routes/MainRoutes'

function App() {
  

  return (
    <>
     <Navbar/><br /><br />
     <MainRoutes/>
    </>
  )
}

export default App
