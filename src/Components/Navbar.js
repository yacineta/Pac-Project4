import React from 'react'
import { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import './Navbar.css'
function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
         navRef.current.classlist.toggle("responsive_nav");
        
    }
  return (
    <header>
        <h3>logo</h3>
        <nav ref={navRef}>
            <a href='/#'>lome</a>
            <a href='/#'>My Work</a>
            <a href='/#'>Blog</a>
            <a href='/#'>About me</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
            <button className='nav-btn ' onClick={showNavbar}>
                <FaBars />
            </button>
        </nav>
        
    </header>
  )
}

export default Navbar




