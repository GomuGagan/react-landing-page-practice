import React, { useState } from 'react'
import "./navbar.css"
import {FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click, setClick]=useState(false);

    const handleClick= ()=> setClick(!click);
  return (
    <div className='Navbar'>
        <div className="logo">
            <h2>Gomu</h2>
        </div>
        <ul className={click? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/">About</a></li>
            <li className='nav-item'><a href="/">FAQ</a></li>
            <li className='nav-item'><a href="/">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click? (<FaTimes size={(30)}/>) : (<FaBars size={30}/>)}
        </div>
    </div>
  )
}

export default Navbar;