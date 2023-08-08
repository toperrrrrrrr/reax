import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import "../../LoginReg.css";
import "../../fonts/material.css";

const Register = () => {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [isID, setId] = useState("");
  const [isResponse, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/api/get");
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      await Axios.post("http://localhost:3001/api/insert", {
        userName: isUsername,
        password: isPassword,
      });
      console.log("Successfully inserted");
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await Axios.put("http://localhost:3001/api/update", {
        userId: isID,
        userName: isUsername,
        newUsername: newUsername,
      });
      console.log("Successfully Updated");
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const userId = isID; // Replace with the actual user id
    try {
      const response = await Axios.delete(
        `http://localhost:3001/api/delete/${userId}`
      );
      console.log(response.data); // Success message
      fetchData();
      setId("");
      // Handle any further actions after successful delete
    } catch (error) {
      console.error(error); // Error message
      // Handle error cases
    }
  };

  const handleNavigateLogin = () => {
    navigate("/");
    return <redirect to="/Login" />;
  };

  return (
    <>
      <div className="screen-bg">
        <div className="container-login">
          {/* <div className="randombox">
            <div className="login-box">
              {isResponse.map((val) => {
                return (
                  <>
                    <p>
                      {val.idUsers} {val.users_Username}{" "}
                    </p>
                  </>
                );
              })}
              <form className="login-form">
                <button
                  type="button"
                  className="box btn"
                  onClick={handleNavigateLogin}
                ></button>
                <h6> Username</h6>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    className="username"
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
                <h6> Password</h6>
                <div className="input-box input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>{" "}
                <div className="input-box input-container">
                  <input
                    type="text"
                    placeholder="ID"
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </div>
                <div className="input-box input-container">
                  <input
                    type="text"
                    placeholder="newusername"
                    onChange={(e) => setNewUsername(e.target.value)}
                  ></input>
                </div>
                <div className="login-button-container">
                  <button
                    type="button"
                    className="box btn"
                    onClick={handleSubmit}
                  >
                    <div className="login100-form-btn">Submit</div>
                  </button>

                  <button
                    type="button"
                    className="box btn"
                    onClick={handleDelete}
                  >
                    <div className="login100-form-btn">Delete {isID}</div>
                  </button>
                  <button
                    type="button"
                    className="box btn"
                    onClick={handleUpdate}
                  >
                    <div className="login100-form-btn">Update</div>
                  </button>
                </div>
              </form>
            </div>
          </div> */}
          <form className="wrap-login">
            <span className="signin-title"> Sign Up </span>
            <div className="wrap-input">
              <span>Username</span>
              <input
                className="inputs"
                type="text"
                placeholder="Type your username"
                required
              />
              <span className="loginicons" data-symbol="&#xf206;"></span>
            </div>

            <div className="wrap-input">
              <span>Email</span>
              <input
                className="inputs"
                type="email"
                placeholder="Type your username"
                required
              />
              <span className="loginicons" data-symbol="&#xf206;"></span>
            </div>

            <div className="wrap-input" data-validate="Password is required">
              <span>Password</span>
              <input className="inputs" required />
              <span className="loginicons" data-symbol="&#xf15c;"></span>
            </div>
            <div className="wrap-input" data-validate="Password is required">
              <span>Password</span>
              <input className="inputs" required />
              <span className="loginicons" data-symbol="&#xf15c;"></span>
            </div>
            <div>
              <div className="wrap-login100-form-btn">
                <button className="login100-form-btn">Register</button>
              </div>
            </div>
            <div className="text-center p-t-60">
              <span className="txt1">Already have an account?</span>
              <a className="txt2" onClick={handleNavigateLogin}>
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
