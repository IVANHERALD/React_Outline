import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import {  Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import {useState,useEffect} from 'react'
import {auth} from './component/Firebase'
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  return (
    <div className="App">
      <AuthProvider value={{currentUser}}>
         <Routes>
         
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          
         </Routes>
         </AuthProvider>
    </div>
  );
}

export default App;
