import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to={"/"}>Home Page</NavLink></li>
            <li><NavLink to={"/product"}>Product Page</NavLink></li>
            <li><NavLink to={"/singleProduct"}>Single Product page</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/cart"}>Cart</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar