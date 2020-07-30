import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default function RegistrationForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/users", formState, {
        withCredentials: true,
      })
      .then(() => navigate("/chat"))
      .catch(console.log);
  }
  return (
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
      <div
        style={{
          background: "rgba(68, 108, 179, .65)",
          boxShadow: "1px 1px 20px black",
          padding: "25px",
          width: "600px",
          marginLeft: "485px",
          display: "center",
        }}
      >
        <h1>Registration</h1>
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
              First Name
            </label>
            <input
              style={{
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
                background:
              "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)"
              }}
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
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
              Last Name
            </label>
            <input
              style={{
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
                background:
              "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)"
              }}
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
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
              Email
            </label>
            <input
              style={{
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
                background:
              "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)"
              }}
              name="email"
              value={formState.email}
              onChange={handleChange}
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
              "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)"
              }}
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
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
              Confirm Password
            </label>
            <input
              style={{
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
                background:
              "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)"
              }}
              name="passwordConfirmation"
              type="password"
              value={formState.passwordConfirmation}
              onChange={handleChange}
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
            Register
          </button>
        </form>
        <br />
        <button
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            margin: "20px",
            backgroundColor: "lightgrey",
            fontSize: "large",
          }}
          onClick={(e) => navigate("/login")}
        >
          Member Login
        </button>
      </div>
    </div>
  );
}
