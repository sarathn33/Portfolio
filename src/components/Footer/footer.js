import React from "react";
import "./footer.css"
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer=()=>{
    return(
        <footer className="footer">
             
            <div className="contact">
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
            <div>
               <p>Copyright &copy; 2023 All rights reserved | Sarath N</p> 
            </div>
            
        </footer>
       
    )
}

export default Footer