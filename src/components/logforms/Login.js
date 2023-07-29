import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Alerts from "../alerts/Alerts";
import eyes from "../../img/eye.svg";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isEye, setEye] = useState("password");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  let username = "admin";
  let password = "password";

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmAction = () => {
    handleClosePopup();
  };

  const eye = () => {
    if (isEye === "password") {
      setEye("text");
    } else setEye("password");
  };

  const register = () => {
    navigate("/Register");
    return <redirect to="/Register" />;
  };

  const handleLogin = () => {
    if (username === isUsername && password === isPassword) {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      handleOpenPopup();
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        setLoggedIn(true);
        event.preventDefault();
        handleLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <div className="screen-bg">
        <div class="login-box">
       
        <h2 className="center-text">Sign In</h2>
          <form className="login-form">
            <div class="user-box">
              <input
                type="text"
                className="form-input"
                required="" 
                value={isUsername}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <label>Username</label>
            </div>
            <div class="user-box">
               <input
                type={isEye}
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label>Password</label>
            </div>
            <a href="#">
       
              Submit
            </a>

            <div className="login-button-container">
              <button type="button" className="form-btn" onClick={handleLogin}>
                <div className="login-button">Login</div>
              </button>
              <button type="button" className="eye-button" onClick={eye}>
                <img src={eyes} className="eyes"></img>
              </button>
            </div>
          </form>
        </div>

        {/* 


            <div className="input-box input-container">
              
            </div>

            <div className="form-btn" onClick={register}>
              Register Here.
    
          </form>
        </div> */}
        <Alerts
          isOpen={showPopup}
          title="Wrong Credentials"
          message="Please Double check"
          onClose={handleClosePopup}
          isHidden="true"
          onConfirm={handleConfirmAction}
        />
      </div>
    </>
  );
};

export default Login;
