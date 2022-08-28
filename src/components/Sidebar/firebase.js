import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


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

export const db = getFirestore(app);