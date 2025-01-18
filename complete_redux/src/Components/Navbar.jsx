import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to={"/"}>Home</Link><br />
        <Link to={"/login"}>Login</Link><br />
        <Link to={"/signup"}>Signup</Link><br />
        <Link to={"/product"}>Product</Link><br />
    </div>
  )
}

export default Navbar