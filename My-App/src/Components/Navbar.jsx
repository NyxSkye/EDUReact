import React from 'react'
import {NavLink} from "react-router-dom"
import "../App.css"


const Navbar = () => {
  return (
    <div id="navbar">
      <img src='/vite.svg' alt='' />
          <NavLink style={{color:"white", textDecoration:"none"}} to="/">Home</NavLink>
          <NavLink style={{color:"white", textDecoration:"none"}} to="/courses">Contact</NavLink>
          <NavLink style={{color:"white", textDecoration:"none"}} to="/courses">Admissions</NavLink>
          <NavLink style={{color:"white", textDecoration:"none"}} to="/contact">Home</NavLink>
          <input type="search" name='Search' id='' placeholder='Input Here'/>
    </div>
  )
}

export default Navbar