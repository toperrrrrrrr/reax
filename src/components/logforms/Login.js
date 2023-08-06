import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Alerts from "../alerts/Alerts";
import "../../fonts/material.css";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isPlaceholderPW, setPlaceholderPW] = useState("*******************");
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
      setPlaceholderPW("Type your password")
    } else {
      setEye("password");
      setPlaceholderPW("******")
    }
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
        <div className="container-login">
          <form className="wrap-login">
            <span className="signin-title"> Sign in </span>
            <div className="wrap-input">
              <span>Username</span>
              <input
                className="inputs"
                type="text"
                placeholder="Type your username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="loginicons" data-symbol="&#xf206;"></span>
            </div>

            <div className="wrap-input" data-validate="Password is required">
              <span>Password</span>
              <input
                className="inputs"
                type={isEye}
                placeholder={isPlaceholderPW}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="loginicons"
                onClick={eye}
                data-symbol="&#xf15c;"
              ></span>
            </div>

            <div className="form-group d-md-flex m-t-30">
              <div className="w-50">
                <input type="checkbox" id="remember" className="cbox"/>
                <label
                  className="cbxLabel"
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
          </form>
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