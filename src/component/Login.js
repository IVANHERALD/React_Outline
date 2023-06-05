import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import {TextField,Button} from '@mui/material';
import login_image from '../Images/loginImage.jpg';
import "./style.css";

function Login() {
  let navigate = useNavigate();

const handleClick=()=>{
  let path='./Register.js';
  navigate(path);
}
  return (
    <div className="app">
      <div className="Input-container-main"
      >
        <div className="Input-container-login">

          <TextField
          
          id="outlined"
          label="Email address"
          defaultValue="email@gmail.com"
        />
        
        <br/><br/><br/>

          <TextField label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/><br/>
        <Button variant="contained">Login</Button> &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={handleClick}>Sign up</Button>
        </div>
        <div className="Input-container-image">
        <img src={login_image} height={300}/>
        </div>
      </div>

    </div>

  );
}

export default Login;