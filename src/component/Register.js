import React from 'react'
import {TextField,Button} from '@mui/material';
import login_image from '../Images/loginImage.jpg';

function Register() {
  return (
    <div className="app">
      <div className="Input-container-main">
        <div className="Input-container-register">
            <h3 className='Title'> Create a new account </h3>
          <TextField
          id="outlined"
          label="Name"
          
        />
        
        <br/><br/><br/>

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
        <Button variant="contained">Register</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained">Sign in</Button>
        
        </div>
        <div className="Input-container-image">
        <img src={login_image} height={300}/>
        </div>
      </div>

    </div>
  )
}

export default Register