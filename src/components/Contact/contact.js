import React, { useRef, useState } from "react";
import "./contact.css"
import { Box, Button } from "@mui/material";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fewaarc', 'template_icnpsm1', form.current, '9nOk9d0ZQXnLxHaYk')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    
  return (
    <div className='contact-form' id="contact">
          <h1>Contact Me</h1>
          <div className="form">
            <Box className="box" sx={{maxHeight:400,boxShadow:{boxShadow:"0px 2px 6px #0000004d;"}}}>
                <form ref={form} className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name"></input>
                    <label>Email</label>
                    <input type="email" name="user_email"></input>
                    <label>Message</label>
                    <textarea rows="8" cols="24" name="message"></textarea>
                    <Button className="home-btn" endIcon={<SendIcon/>} type="submit" variant="contained" sx={{bgcolor:"greenyellow",":hover":{bgcolor:"yellow"},"color":{color:"black"}}}>Submit</Button>
                    <span>{done && "Thanks for Contacting me"}</span>
                </form>
            </Box>
            
          </div>
    </div>
  )
}

export default Contact;

