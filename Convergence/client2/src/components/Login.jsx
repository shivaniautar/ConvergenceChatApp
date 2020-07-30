import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
//import RegistrationForm from '../views/RegistrationForm'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    axios
      .post(
        "http://localhost:4000/api/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then(() => navigate("/chat"))
      .catch(() => setErr("Please check your credentials!"));
  }

  return (
    <div>
    <div>
    <h1
        style={{
          padding: "1px",
          margin: "0px"
        }}
      ></h1>
            <h1
        style={{
          padding: "15px",
          // marginLeft:"140px",
          fontFamily:"Chalkduster, fantasy",
          fontStyle:"italic",
          fontSize:"80px",
          textShadow:"0 0 3px #FF0000, 0 0 5px #0000FF"
        }}
      >
        Convergence
      </h1>
    </div>
    
    <div
      style={{
        background: "rgba(68, 108, 179, .65)",
        boxShadow: "1px 1px 20px black",
        padding: "50px",
        width: "700px",
        marginLeft: "435px",
        display: "center",
      }}
    >
      
      {/* <h1
        style={{
          padding: "40px",
          margin: "0px",
          textAlign:"center",
        }}
      ></h1> */}
      <h1>Member Login</h1>
      {err && (
        <p
          style={{
            color: "red",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          {err}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label
            style={{
              borderRadius: "30px",
              padding: "10px",
              margin: "10px",
              boxShadow: "1px 1px 5px black",
            }}
          >
            Email
          </label>
          <input
            style={{
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              background:
                "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)",
            }}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            style={{
              borderRadius: "30px",
              padding: "10px",
              margin: "10px",
              boxShadow: "1px 1px 5px black",
            }}
          >
            Password
          </label>
          <input
            style={{
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              background:
                "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)",
            }}
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            margin: "20px",
            backgroundColor: "lightgrey",
            fontSize: "large",
          }}
        >
          Login
        </button>
      </form>
      <br />
    </div>
    </div>
  );
}
