import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider}  from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD0MhXB0kLM5gdA4uYUjqFJFxPMv9OamAE",
  authDomain: "rental-system-638a6.firebaseapp.com",
  projectId: "rental-system-638a6",
  storageBucket: "rental-system-638a6.appspot.com",
  messagingSenderId: "771999173929",
  appId: "1:771999173929:web:d2caa2ceda05d0add7fb38"
}


// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const provider = new GoogleAuthProvider();


export {auth,provider}