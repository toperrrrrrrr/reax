import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Alerts from "../alerts/Alerts";
import eyes from "../../img/eye.svg";
import "../../fonts/material.css";

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
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form">
              <span className="login100-form-title p-b-49"> Login </span>
              <div className="wrap-input100  m-b-23">
                <span>Username</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Type your username"
                  required=""
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                className="wrap-input100"
                data-validate="Password is required"
              >
                <span>Password</span>
                <input
                  className="input100"
                  placeholder="Type your password"
                  type={isEye}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>

              <div className="form-group d-md-flex m-t-30">
                <div className="w-50">
                  <input type="checkbox" name="remember" checked />
                  <label
                    className="checkbox-wrap checkbox-primary"
                    for="remember"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
              <div>
                <div className="wrap-login100-form-btn" onClick={handleLogin}>
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>
              <div className="text-center p-t-115">
                <span className="txt1">Don’t have an account?</span>
                <a className="txt2" onClick={register}>
                  Sign Up
                </a>
              </div>
              <button type="button" className="eye-button" onClick={eye}>
                <img src={eyes} className="eyes"></img>
              </button>
            </form>
          </div>
        </div>

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
