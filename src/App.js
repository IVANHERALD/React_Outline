import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import VerifyEmail from './component/VerifyEmail';
import {  Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import {useState,useEffect} from 'react'
import {auth} from './component/Firebase'

import {onAuthStateChanged} from 'firebase/auth'
import RentCatergory from './component/RentCatergory';
import AddCategoryDetails from './component/AddCategoryDetails'
import CategoryPage from './component/CategoryPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  const [category, setSelectedCategory] = useState(null);
  const [photos, setPhotos] = useState([]);
  const newPhotos = [...photos];

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  return (
    <div className="App">
      <AuthProvider value={{photos,setPhotos,newPhotos,currentUser,timeActive, setTimeActive,category,setSelectedCategory}}>
         <Routes>
         
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/RentCatergory" element={<RentCatergory/>}/>
          <Route path="/AddCategoryDetails/:category" element={<AddCategoryDetails/>}/>
          <Route path="/category/:category" element={<CategoryPage />} />

         </Routes>
         </AuthProvider>
    </div>
  );
}

export default App;
