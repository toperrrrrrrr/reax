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

        <div class="limiter">
		<div class="container-login100" style="background-color:darkslategrey;">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49"> Login </span>

					<div class="wrap-input100 validate-input m-b-23">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" placeholder="Type your username" />
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" placeholder="Type your password" />
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div>


					<div class="form-group d-md-flex m-t-30" >
						<div class="w-50">
							<input type="checkbox" name="remember" checked>
							<label class="checkbox-wrap checkbox-primary" for="remember">Remember Me</label>
						</div>
						<div class="w-50 text-md-right">
							<a href="#">Forgot Password</a>
						</div>
					</div>
					<div>
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">Login</button>
						</div>
					</div>
					<div class="text-center p-t-115">
						<span class="txt1">
							Don’t have an account?
						</span>

						<a class="txt2" href="#">
							Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
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
