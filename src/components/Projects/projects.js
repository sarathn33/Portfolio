import React from "react";
import "./projects.css";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Todo from "../assets/todo.svg";
import Movie from "../assets/movie.svg";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import SourceIcon from '@mui/icons-material/Source';


const Projects=()=>{
    return(
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="card-contents">
                
             <Card className="project-card" sx={{maxWidth:205,maxHeight:500}}>
             <CardMedia
             sx={{height:200}}
        component="img"
        alt="Todo"
        className="project-img"
        image={Todo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         To Do App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        To Do is a task management app to help you stay organized and manage your day-to-day.
        </Typography>
      </CardContent>
      <CardActions className="project-btn">
      <Button className="pro-btn" onClick={()=>window.open("https://todo-fullstack-app-mern.netlify.app/","_blank")} variant="contained" endIcon={<OpenInBrowserIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Live Site</Button>
      <Button className="pro-btn" onClick={()=>window.open("https://github.com/sarathn33/todo","_blank")} variant="contained" endIcon={<SourceIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Front-End</Button>
      <Button className="pro-btn" onClick={()=>window.open("https://github.com/sarathn33/Todo_fullstack/tree/main/server","_blank")} variant="contained" endIcon={<SourceIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Back-End</Button>
      </CardActions>
            </Card>


            <Card className="project-card" sx={{maxWidth:205,maxHeight:500}}>
             <CardMedia
             sx={{height:200}}
        component="img"
        alt="Movie"
        className="project-img"
        image={Movie}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Movie Booking App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        An online movie ticketing system is a digital platform that allows customers to access the services of buy tickets.
        </Typography>
      </CardContent>
      <CardActions className="project-btn">
      <Button className="pro-btn" onClick={()=>window.open("https://movie-booking-site-webcode.netlify.app/","_blank")} variant="contained" endIcon={<OpenInBrowserIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Live Site</Button>
      <Button className="pro-btn" onClick={()=>window.open("https://github.com/sarathn33/webcode2-FE.git","_blank")} variant="contained" endIcon={<SourceIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Front-End</Button>
      <Button className="pro-btn" onClick={()=>window.open("https://github.com/sarathn33/webcode2-BE.git","_blank")} variant="contained" endIcon={<SourceIcon/>} sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Back-End</Button>
      </CardActions>
            </Card>
            </div>
        </div>
       
    )
}

export default Projects;