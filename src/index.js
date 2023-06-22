import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './component/Footer';
import 'semantic-ui-css/semantic.min.css';
import RentCatergory from './component/RentCatergory';
import AddCategoryDetails from './component/AddCategoryDetails';
import PhotoUploadForm from './component/UploadPhoto';
import Profile from './component/Profile';
import BuyCatergory from './component/BuyCategory';
import RentProductPage from './component/RentProductPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId='761985950049-qkpo9genj5hql966dk2dn7patviibb5d.apps.googleusercontent.com'><App/></GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
