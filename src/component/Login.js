import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import {TextField,Button} from '@mui/material';
import login_image from '../Images/loginImage.jpg';
import "./style.css";
import { useAuthValue } from "../AuthContext"

function Login() {
  let history = useNavigate();
  const {currentUser} = useAuthValue()
  

const handleClick=()=>{
  console.log(currentUser)
  history('/Register');
}
  return (
    <div className="app">
      <div className="Input-container-main">
        <div className="Input-container-login">
          <TextField id="outlined" label="Email address"/>       <br/><br/><br/>
          <TextField label="Password"type="password"autoComplete="current-password"/>     <br/><br/><br/>
          <Button variant="contained">Login</Button> &nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={handleClick}>Sign up</Button>
        </div>
        <br/>
        
        <div className="Input-container-image">
        <img src={login_image}  alt="login_image" className="image"/>
        </div>
      </div>
    </div>

  );
}

export default Login;