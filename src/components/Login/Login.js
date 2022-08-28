import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = (res) => {
    console.log(res);
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setLoginStatus(true);
  };

  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };

  return (
    <div className="card">
      <span className="card_sp"></span>
      <h1>Sign in to account</h1>
      <span className="card_sp"></span>
      {!loginStatus && (
        <GoogleLogin
          clientId="7205238352-ra6412jde9mau3uoqs5hrnlk5gj18bia.apps.googleusercontent.com"
          buttonText="Sing in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <span className="card_sp"></span>
          <p>{name}</p>
          <p>{email}</p>
          <img src={url} alt={name} />
          <span className="card_sp"></span>
          <GoogleLogout
            clientId="7205238352-ra6412jde9mau3uoqs5hrnlk5gj18bia.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
