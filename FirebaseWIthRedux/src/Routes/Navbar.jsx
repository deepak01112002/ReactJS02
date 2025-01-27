import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={"/"}>Data</Link>
        <Link to={"/add"}>Add Data</Link>
    </div>
  )
}

export default Navbar