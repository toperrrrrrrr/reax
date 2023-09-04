import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
import "../../LoginReg.css";
import "../../fonts/material.css";
import Axios from "axios";

const Login = () => {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isPlaceholderPW, setPlaceholderPW] = useState("*******************");
  const [isEye, setEye] = useState("password");
  const [showPopup, setShowPopup] = useState(false);
  const [isResponse, setResponse] = useState([]);
  const navigate = useNavigate();
  const validUsername = "admin";
  const validPassword = "password";

  useEffect(() => {
    fetchUsername();
  }, []);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmAction = () => {
    handleClosePopup();
  };

  const togglePasswordVisibility = () => {
    if (isEye === "password") {
      setEye("text");
      setPlaceholderPW("Type your password");
    } else {
      setEye("password");
      setPlaceholderPW("******");
    }
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  const handleLogin = () => {
    if (validUsername === isUsername && validPassword === isPassword) {
      navigate("/dashboard");
    } else {
      handleOpenPopup();
    }
  };

  const fetchUsername = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:3001/api/get/login/${isUsername}`
      );
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="screen-bg">
      <div className="container-login">
        <div className="wrap-login">
          <h1 className="user-information">
            <h2>User Information:</h2>
            <div>
              {isResponse.map((val) => (
                <p key={val.iduser}>
                  {val.iduser} {val.u_name}
                </p>
              ))}
            </div>
          </h1>

          <div>
            <div className="wrap-login100-form-btn" onClick={fetchUsername}>
              <div className="login100-form-bgbtn"></div>
              <button className="login100-form-btn">Fetch Username</button>
            </div>
          </div>
        </div>

        <form className="wrap-login" onSubmit={handleLogin}>
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
              value={isPassword}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="loginicons"
              onClick={togglePasswordVisibility}
              data-symbol="&#xf15c;"  
            ></span>
          </div>

          <div className="form-group d-md-flex m-t-30">
            <div className="w-50">
              <input type="checkbox" id="remember" className="cbox" />
              <label className="cbxLabel" htmlFor="remember">
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
            <a className="txt2" onClick={handleRegister}>
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
  );
};

export default Login;
