import React from "react";
import "./skills.css";
import Html from "../assets/html-5-svgrepo-com.svg";
import Css from "../assets/css-3-svgrepo-com.svg";
import Bootstrap from "../assets/icons8-bootstrap-512.svg";
import Javascript from "../assets/javascript-svgrepo-com.svg";
import Reactjs from "../assets/react.svg";
import Materialui from "../assets/icons8-material-ui-480.svg";
import Nodejs from "../assets/nodejs-1-logo-svgrepo-com.svg";
import Expressjs from "../assets/express-svgrepo-com.svg";
import Mongodb from "../assets/mongo-svgrepo-com.svg";
import Jwt from "../assets/icons8-json-web-token-480.svg";
import Vscode from "../assets/vscode-svgrepo-com.svg";
import Postman from "../assets/postman-icon-svgrepo-com.svg";
import Git from "../assets/git-svgrepo-com.svg";
import Github from "../assets/github-142-svgrepo-com.svg";
import Netlify from "../assets/netlify.svg";
import { Card } from "@mui/material";




const Skills=()=>{

    const skills=[{
        name:"HTML5",
        icon:Html
    },
    {
        name:"CSS3",
        icon:Css
    },
    {
        name:"Bootstrap",
        icon:Bootstrap
    },
    {
        name:"JavaScript",
        icon:Javascript
    },
    {
        name:"React JS",
        icon:Reactjs
    },
    {
        name:"Material UI",
        icon:Materialui
    },
    {
        name:"Node JS",
        icon:Nodejs
    },
    {
        name:"Express JS",
        icon:Expressjs
    },
    {
        name:"MongoDB",
        icon:Mongodb
    },
    {
        name:"JWT",
        icon:Jwt
    }];

    const tools=[{
        name:"VS Code",
        icon:Vscode
    },
    {
        name:"Postman",
        icon:Postman
    },
    {
        name:"Git",
        icon:Git
    },
    {
        name:"GitHub",
        icon:Github
    },
    {
        name:"Netlify",
        icon:Netlify
    }]
    return(
        <div className="Card" id="skills">
            <h1>Skills</h1>
            <div className="skills">
                
                {skills.map((item,index)=>(
                     <Card className="icon-card" key={index} sx={{minWidth:150,minHeight:150}}>
                        <img className="icons" src={item.icon} alt="Icon"/>
                        <h3>{item.name}</h3>
                     </Card>

                ))} 
            </div>
            <br/>
            <br/>
            <h1>Tools</h1>
            <div className="tools">
                    
                    {tools.map((item,index)=>(
                        <Card className="icon-card" key={index} sx={{minWidth:150,minHeight:150}}>
                        <img className="icons" src={item.icon} alt="Icon"/>
                        <h3>{item.name}</h3>
                     </Card>
                    ))}
            </div>
            
        </div>
    
    )
}

export default Skills;