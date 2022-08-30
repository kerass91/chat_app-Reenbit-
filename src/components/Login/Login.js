import React, { useState, useRef } from "react";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { singup, useAuth, logout, login } from "../Sidebar/firebase";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const responseGoogle = (res) => {
    console.log(res);
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setLoginStatus(true);
  };

  const logout1 = () => {
    console.log("logout");
    setLoginStatus(false);
  };

  const handleSingup = async() => {
    setLoading(true);
    try{
      await singup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Something is wrong')
    }
      
    setLoading(false);
    
  }


  const handleLogin = async() => {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('This accaunt has already exist')
    }
    setLoading(false);
    
  }


const handleLogout = async() => {
  setLoading(true);
  try {
    logout()
  } catch {
    alert("Error!")
  }
  setLoading(true);
  
}

  return (
    <div className="card">

      {!currentUser && (
        <> 
        <span className="card_sp"></span>
        <h1>Sign in to account</h1>
        <span className="card_sp"></span>
        <div className="card_mail">
          <input ref={emailRef}
        placeholder="Email"
        />
          <input ref={passwordRef}
        type='password'
        placeholder="Password"
        />
        </div>
        <button disabled={loading || currentUser} onClick={handleSingup}>Sign up</button>
        <button disabled={loading || currentUser} onClick={handleLogin}>Login</button>

        <span className="card_sp"></span>
         
        <GoogleLogin
          clientId="7205238352-ra6412jde9mau3uoqs5hrnlk5gj18bia.apps.googleusercontent.com"
          buttonText="Sing in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        </> 
      )}
      {currentUser && (
        <>
         <h1>My Data</h1>
          <p>{name}</p>
          <p>{email|| currentUser.email}</p>
          <img src={url} alt={name} />
          <span className="card_sp"></span>
          <button onClick={handleLogout}>Log out</button>
          <GoogleLogout
            clientId="7205238352-ra6412jde9mau3uoqs5hrnlk5gj18bia.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout1}
          />
        </>
      )}
    </div>
  );
};

export default Login;
