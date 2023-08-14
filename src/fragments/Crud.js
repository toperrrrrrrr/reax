import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Crud() {
  const [number, setNumber] = useState("");

  const [isName, setName] = useState("");
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isAccessLevel, setAccessLevel] = useState("1");
  const [isDateCreated, setDateCreated] = useState("");
  const [isResponse, setResponse] = useState([]);

  const handleNumberChange = (event) => {
    const newValue = event.target.value;

    // Check if the new value is within the specified max range
    if (newValue === "" || Number(newValue) <= 100) {
      setNumber(newValue);
    }
  };

  useEffect(() => {
    fetchRead();
  }, []);

  const fetchRead = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/api/get");
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async () => {
    try {
      await Axios.post("http://localhost:3001/api/insert", {
        userName: isUsername,
        password: isPassword,
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
              <input type="text" placeholder="name"></input>
              <input type="text" placeholder="username"></input>
              <input type="text" placeholder="Password"></input>
              <input
                type="number"
                value={number}
                onChange={handleNumberChange}
                max={100}
              />
              <button type="button">Insert</button>
            </form>
          </div>
        </div>
        <div className="content ">
          <div className="in-content">
            <h1>Read</h1>
            {isResponse.map((val) => {
                return (
                  <>
                    <p>
                      {val.idUsers} {val.users_Username}{" "}
                    </p>
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
