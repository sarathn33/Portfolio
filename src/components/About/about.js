import { Button, Typography } from "@mui/material";
import React from "react";
import "./about.css";
import Resume from "../assets/Resume.pdf";
import FileDownloadIcon from '@mui/icons-material/FileDownload';




const About=()=>{
    return(
        <div className="about" id="about">
            <h1 className="head"> Wanna know about me?</h1>
            <Typography>Self-starting and resourceful web developer with expertise implementing front-end and back-end. Astute and always learning designer of user interactions on websites and databases that are sound and easy to use. Proven problem- solver with solid grounding in data-driven applications and concepts. Communicates clearly with technical and non - technical team members and promotes drive for customer service.
            A passionate developer spending most days learning and building up new features and functionality web applications.Familiar with wide range of programming utilities and languages. Collaborative team player with a willingness to learn and grow with the organization.</Typography>

            <div className="resume">
                <a href={Resume} download>
                <Button className="home-btn" endIcon={<FileDownloadIcon/>} variant="contained" sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Download Resume</Button>
                </a>
            
            </div>

        </div>
    )
}

export default About;