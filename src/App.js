import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import './components/Sidebar/Sidebar'
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from "./components/Login/Login";


function App() {
  return (
     <div className="App"> 
         <div className="app__body">
          {/* <Login/>  */}
          <Sidebar/> 
         <Routes>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/" element={<Chat/>}/>
          <Route path="/room/:roomId" element={<Chat/>}/>
         </Routes> 
       </div>
     </div>

  );
}

export default App;
