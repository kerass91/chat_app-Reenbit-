import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import './components/Sidebar/Sidebar'
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from "./components/Login/Login";
import {useAuth} from "./components/Sidebar/firebase";


function App() {
  const currentUser = useAuth();

  if (!currentUser) {
    return <Login/>
  }
  return (
     <div className="App"> 
         <div className="app__body">
          <Sidebar/> 
         <Routes>
          <Route path="/login" element={/* currentUser? <Navigate to="/"/> :  */<Login/>}/> 
          <Route path="/" element={<Chat/>}/>
          <Route path="/room/:roomId" element={<Chat/>}/>
         </Routes> 
       </div>
     </div>

  );
}

export default App;
