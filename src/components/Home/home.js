import React from "react";
import "./home.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Homeimg from "../assets/10354235_4428859.svg"
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { HashLink as Link } from "react-router-hash-link";


const Home=()=>{
   const [text]= useTypewriter({
    words:[" Fullstack Web Developer."],
    loop:{},
   }) ;
    return(
        <div className="Home">
            <div>
                 <div className="details">
                <h1>Hi there, I am <span style={{color:"yellow"}}>Sarath </span></h1>
                <h1>I'm a Passionate 
                    <span style={{fontWeight:"bolder",color:"yellow"}}>
                        {text}
                    </span>
                    <span>
                        <Cursor/>
                    </span>
                    
                </h1>
                </div>
                
            </div>
           

                <div className="social-media">
                <span onClick={()=>window.open("tel://+917868068758","_blank")}> 
                    <PhoneIcon className="footer-icon" fontSize="large" sx={{color:"white"}}/>
                </span>
                <span onClick={()=>window.open("https://github.com/sarathn33","_blank")}>
                    <GitHubIcon className="footer-icon" fontSize="large" sx={{color:"white"}}/>
                </span>
                <span onClick={()=>window.open("https://www.linkedin.com/in/sarath-n-021117227/","_blank")}>
                    <LinkedInIcon className="footer-icon" fontSize="large" sx={{color:"white"}}/>
                </span>
                <span onClick={()=>window.open("mailto:sarathsarath345@gmail.com","_blank")}>
                    <EmailIcon className="footer-icon" fontSize="large" sx={{color:"white"}}/>
                </span>
                </div>

                <div className="button">
                   <Link smooth to="#about"><Button className="home-btn" variant="contained" endIcon={<InfoIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>About</Button></Link> 
                   <Link smooth to="#contact"><Button className="home-btn" variant="contained" endIcon={<ContactMailIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Contact</Button></Link> 
               
                </div>
                
                <div className="home-img">
                    <img src={Homeimg} alt="Home-img"/>
                </div>
           

           
        </div>
    )
}

export default Home;