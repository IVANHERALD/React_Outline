import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
         <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
         </Routes>
    </div>
  );
}

export default App;
