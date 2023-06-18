import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate,Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import {TextField,Button} from '@mui/material';
import login_image from '../Images/loginImage.jpg';

import { signInWithEmailAndPassword, sendEmailVerification, signInWithPopup } from 'firebase/auth';

import {auth,provider} from './Firebase'
import "./Styles/style.css";
import { useAuthValue } from "../AuthContext"

function Login() {
  let history = useNavigate();
  const {currentUser} = useAuthValue()
  const {setTimeActive} = useAuthValue()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [value,setValue]=useState('')

  
  
const handleClick=()=>{
  console.log(currentUser)
  history('/Register');
}
const login = e => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    if(!auth.currentUser.emailVerified) {
      sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true)
        history('/VerifyEmail')
      })
    .catch(err => alert(err.message))
  }else{
    history('/Profile')
  }
  })
  .catch(err => setError(err.message))
}


  const handleGoogleSignIn =  e => {

    e.preventDefault()
    try {
      signInWithPopup(auth, provider).then(()=>{
        history('/Profile')
      })
      .catch(err=>alert(err.message))
      
      
      // Sign-in successful, perform additional actions or redirect
    } catch (error) {
      console.error(error);
    }
  };
  const handlee=()=>{
    history('/Profile')
  }
      


  return (
    <div className="app">
      <div className="Input-container-main">
        <div className="Input-container-login">
          <h2>Login</h2>
        <center>
          <Button  variant ="outlined" width="100" onClick={handleGoogleSignIn}> <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" width={20} height={20}/>&nbsp;&nbsp; Sign In with Google</Button></center><br/><br/>
          <TextField id="outlined" label="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>       <br/><br/>
          <TextField label="Password"type="password"autoComplete="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>    <br/> <br/>
          <span><Link to='/'>Forgot password?</Link></span><br/><br/>
          <Button variant="contained" onClick={login}>Login</Button> &nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={handleClick}>Sign up</Button>
        </div>   
        <div className="Input-container-image">
        <img src={login_image}  alt="login_image" className="image"/>
        </div>
      </div>
    </div>

  );
}

export default Login;