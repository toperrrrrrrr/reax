import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Crud() {
  const [numbers, setNumber] = useState("");

  const [isName, setName] = useState("");
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isResponse, setResponse] = useState([]);

  const handleNumberChange = (event) => {
    const newValue = event.target.value;
    if (newValue === "" || Number(newValue) <= 100) {
      setNumber(newValue);
    }
  };

  const fetchRead = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/api/get");
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRead();
  }, []);

  const handleCreate = async () => {
    try {
      await Axios.post("http://localhost:3001/api/insert", {
        u_name: isName,
        u_userName: isUsername,
        u_password: isPassword,
        u_accessLevel: numbers,
      });
      console.log("Successfully inserted");
      fetchRead();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="main-header"> Crud </div>

      <div className="contents">
        <div className="content">
          <div className="in-content">
            <h1>Create</h1>
            <form>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="number"
                value={numbers}
                onChange={handleNumberChange}
                max={100}
              />
              <button type="button" onClick={handleCreate}>
                Insert
              </button>
            </form>
          </div>
        </div>
        <div className="content ">
          <div className="in-content">
            <h1>Read</h1>
            {isResponse.map((val) => {
              return (
                <>
                  <p>{val.u_name} </p>
                </>
              );
            })}
          </div>
        </div>
        <div class="content">
          <div className="in-content">
            <h1>Update</h1>
          </div>
        </div>
        <div class="content">
          <h1>Delete</h1>
        </div>
      </div>
    </div>
  );
}
