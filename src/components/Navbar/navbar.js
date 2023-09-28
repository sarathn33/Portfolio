import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick = () =>setClick(!click)
    const closeMenu=()=>setClick(false)

    
    
      return (
        <div className="header">
          
          <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
            <Link smooth to="/#" onClick={closeMenu}>Home</Link>
            </li>
    
            <li>
            <Link smooth to="/#about" onClick={closeMenu}>About</Link>
            </li>
    
            <li>
            <Link smooth to="/#skills" onClick={closeMenu}>Skills</Link>
            </li>
    
            <li>
            <Link smooth to="/#projects" onClick={closeMenu}>Projects</Link>
            </li>
    
            <li>
            <Link smooth to="/#contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click?(
           <CloseIcon fontSize="large" sx={{color:"white"}}/> )
           :(<MenuIcon fontSize="large" sx={{color:"white"}} />)
           }
          </div>
        </div>
      )
    }
    
    export default Navbar