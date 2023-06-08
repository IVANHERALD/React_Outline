import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import {  Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import {useState,useEffect} from 'react'
import {auth} from './component/Firebase'
import {onAuthStateChanged} from 'firebase/auth'
import VerifyEmail from './component/VerifyEmail';

function App() {
  const [timeActive, setTimeActive] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  return (
    <div className="App">
      <AuthProvider value={{currentUser,timeActive,setTimeActive}}>
         <Routes>
         
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Verify-email" element={<VerifyEmail/>}/>
          
         </Routes>
         </AuthProvider>
    </div>
  );
}

export default App;
