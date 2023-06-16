import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import VerifyEmail from './component/VerifyEmail';
import SellCategory from './component/SellCategory';
import {  Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import {useState,useEffect} from 'react'
import {auth} from './component/Firebase'
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  return (
    <div className="App">
      <AuthProvider value={{currentUser,timeActive, setTimeActive}}>
         <Routes>
         
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/SellCategory" element={<SellCategory/>}/>
         </Routes>
         </AuthProvider>
    </div>
  );
}

export default App;
