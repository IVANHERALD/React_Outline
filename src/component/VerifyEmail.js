import {useAuthValue} from '../AuthContext'
import {useState,useEffect} from 'react'
import {auth} from './Firebase'
import {sendEmailVerification} from 'firebase/auth'

import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

function VerifyEmail() {
    const [time, setTime] = useState(60)
const {timeActive, setTimeActive}= useAuthValue()
const {currentUser} = useAuthValue()
const [setButtonDisabled] = useState(false)
    const history=useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
          currentUser?.reload()
          .then(() => {
            if(currentUser?.emailVerified){
              clearInterval(interval)
              history('/')
            }
          })
          .catch((err) => {
            alert(err.message)
          })
        }, 1000)
      }, [history, currentUser])
   
    

useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time])

const resendEmailVerification = () => {
    setButtonDisabled(true)
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setButtonDisabled(false)
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
      setButtonDisabled(false)
    })
  }
  return (
    <div><button 
    onClick={resendEmailVerification}
    disabled={timeActive}
    >Resend Email{timeActive && time}</button></div>
  )
}

export default VerifyEmail