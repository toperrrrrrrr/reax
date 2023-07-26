import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../img/bg.svg";
import Axios from "axios";

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
      <div className="login-bg">
        <img src={bg} className="logo"></img>
        <div className="login-box">
          <div className="screen_content">
            <form className="login ">
              <button
                type="button"
                className="box btn"
                onClick={handleNavigateLogin}
              >
                <div className="loginbutton">Login</div>
              </button>
              {isResponse.map((val) => {
                return (
                  <>
                    <p>
                      {val.idUsers} {val.users_Username}{" "}
                    </p>
                  </>
                );
              })}
              <h4> Register </h4>
              <button
                type="text"
                placeholder="Username"
                className="username"
                onChange={(e) => setUsername(e.target.value)}
              ></button>

              <button
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></button>
              <button
                type="text"
                placeholder="ID"
                onChange={(e) => setId(e.target.value)}
              ></button>
              <button
                type="text"
                placeholder="newusername"
                onChange={(e) => setNewUsername(e.target.value)}
              ></button>
              <div className="confirmation-buttons">
                <button
                  type="button"
                  className="box btn"
                  onClick={handleSubmit}
                >
                  <div className="loginbutton">Submit</div>
                </button>

                <button
                  type="button"
                  className="box btn"
                  onClick={handleDelete}
                >
                  <div className="loginbutton">Delete {isID}</div>
                </button>
                <button
                  type="button"
                  className="box btn"
                  onClick={handleUpdate}
                >
                  <div className="loginbutton">Update</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
