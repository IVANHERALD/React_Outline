
import React from 'react'
import {TextField,Button} from '@mui/material';
import login_image from '../Images/loginImage.jpg';
import { useNavigate,Link } from 'react-router-dom';
import {useState} from 'react'
import {auth} from './Firebase'
import {createUserWithEmailAndPassword,sendEmailVerification }  from 'firebase/auth'
import {useAuthValue} from '../AuthContext'

function Register() {
  const history =useNavigate();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
        
      }
    }
    return isValid
  }


    const register = e => {
      e.preventDefault()
      setError('')
      if(validatePassword()) {
        // Create a new user with email and password using firebase
          createUserWithEmailAndPassword(auth,email, password)
          .then(() => {
            sendEmailVerification(auth.currentUser)
            .then(() => {
              history('/VerifyEmail')
              setTimeActive(true)
            }).catch((err) => alert(err.message))
          })
          .catch(err => setError(err.message))
      }
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    


  return (
    <div className="app">
      <div className="Input-container-main">
        <div className="Input-container-register">
            <h3 className='Title'> Create a new account </h3>
          <TextField id="outlined" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/><br/>
          <TextField id="outlined" label="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/><br/><br/>
          <TextField label="Password" autoComplete="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/><br/>
          <TextField label="Confirm Password" type="password" autoComplete="current-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/><br/><br/><br/>
          <Button variant="contained" onClick={register}>Register</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br/><br/>
          <span>
          Already have an account?  
          <Link to='/'>login</Link>
        </span>
          </div>

        <div className="Input-container-image">
        <img src={login_image} height={300} alt="register_image"/>
        </div>
      </div>

    </div>
  )
}

export default Register