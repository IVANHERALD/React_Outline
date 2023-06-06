import React from 'react'
import {TextField,Button} from '@mui/material';
import login_image from '../Images/loginImage.jpg';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import {auth} from './Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

function Register() {
  const history =useNavigate();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')



    const Loginpage=()=>{
        history("/");
    }

    const register = e => {
      e.preventDefault()
      setError('')
      if(true) {
        // Create a new user with email and password using firebase
          createUserWithEmailAndPassword(auth,email, password)
          .then((res) => {
              console.log(res.user)
            })
          .catch(err => setError(err.message))
      }
      setName('')
      setEmail('')
      setPassword('')
      
    }


  return (
    <div className="app">
      <div className="Input-container-main">
        <div className="Input-container-register">
            <h3 className='Title'> Create a new account </h3>
          <TextField
          id="outlined"
          label="Name"
          value={name}
        />
        
        <br/><br/><br/>

        <TextField
          id="outlined"
          label="Email address"
          defaultValue="email@gmail.com"
          value={email}
        />
        
        <br/><br/><br/>

          <TextField label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
        /><br/><br/><br/>
        <Button variant="contained">Register</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={Loginpage}>Sign in</Button>
        
        </div>
        <div className="Input-container-image">
        <img src={login_image} height={300}/>
        </div>
      </div>

    </div>
  )
}

export default Register