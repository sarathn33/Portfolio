import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick = () =>setClick(!click)

    
    
      return (
        <div className="header">
          
          <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
            <Link smooth to="/#">Home</Link>
            </li>
    
            <li>
            <Link smooth to="/#about">About</Link>
            </li>
    
            <li>
            <Link smooth to="/#skills">Skills</Link>
            </li>
    
            <li>
            <Link smooth to="/#projects">Projects</Link>
            </li>
    
            <li>
            <Link smooth to="/#contact">Contact</Link>
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