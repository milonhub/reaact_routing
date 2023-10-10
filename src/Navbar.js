import React from 'react'
import {  NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className='link'> Home </NavLink> <br/>
        <NavLink to = "/Contact" className='link'>Contact</NavLink> <br/>
        <NavLink to = "/Blogs" className='link'>Blogs</NavLink> <br/>
    
    </nav>
  )
}

export default Navbar;