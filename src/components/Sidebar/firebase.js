import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCcvjaVf-jPJ74HsrYC3JagrKPg41JeFV8",
    authDomain: "chat-app-a3fad.firebaseapp.com",
    projectId: "chat-app-a3fad",
    storageBucket: "chat-app-a3fad.appspot.com",
    messagingSenderId: "7205238352",
    appId: "1:7205238352:web:9ddaad2cd09740c4644355",
    measurementId: "G-THKS4TPWKX"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export const singup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  export const logout = () => {
    return signOut(auth)
}

export const db = getFirestore(app);

// Custom hook

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user=> setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
} 

