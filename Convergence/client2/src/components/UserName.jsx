import React, { useState } from "react";
import { navigate } from "@reach/router";
import io from "socket.io-client";

export default function UserName(props) {
  const [socket] = useState(() => io(":4000"));
  const [newUserName, setNewUserName] = useState("");
  const [disableValue, setDisableValue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewUser(newUserName);
    setNewUserName("");
    setDisableValue(true);
    if (newUserName) {
      return alert("Now you are free to chat!");
    }
    //socket.emit('new user', newUserName)
  };

  return (
    <div
      style={{
        background: "rgba(68, 108, 179, .65)",
        boxShadow: "1px 1px 20px black",
        paddingTop: "25px",
        paddingLeft:"100px",
        paddingRight:"100px",
        marginTop: "0px",
        width: "250px",
        marginLeft: "590px",
      }}
    >
      {/* <h1
        style={{
          background: "lightgrey",
          borderRadius: "5px",
        }}
      >
        Choose a User Name!
      </h1> */}
      <form onSubmit={handleSubmit}>
        <input
          value={newUserName}
          style={{
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "lightgrey",
          }}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button
          disabled={disableValue}
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            margin: "20px",
            backgroundColor: "lightgrey",
            fontSize: "large",
          }}
        >
          Enter Username
        </button>
      </form>
    </div>
  );
}
