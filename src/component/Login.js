import React, { useState } from "react";
import ReactDOM from "react-dom";
import TextField from '@mui/material/TextField';

import "./style.css";

function Login() {

  return (
    <div className="app">
      <div className="Input-container-main"
      >
        <div className="Input-container-login">
          <TextField variant="standard" label="E-mail address" type="text" name="email"/>
          
        </div>
      </div>

    </div>

  );
}

export default Login;