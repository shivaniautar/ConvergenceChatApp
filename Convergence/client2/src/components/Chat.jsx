import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket] = useState(() => io(":4000"));
  const [name, setName] = useState(null);

  // useEffect(() => {
  //    axios.get('http://localhost:4000/api/users')
  //      .then(response => console.log(response))
  //      //.catch(() => navigate('/'));
  //   }, []);

  useEffect(() => {
    socket.on("name", (newUser) => {
      setName(newUser);
    });
    socket.on("updated thread", (data) =>
      setMessages((prevMessages) => {
        return [data, ...prevMessages];
      })
    );
  }, []);

  //if (name === null) return 'Loading...'

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("new message", {
      message: newMessage,
      user: props.user,
    });
    setNewMessage("");
  }
  return (
    <div
    style={{
      background: "rgba(68, 108, 179, .65)",
      boxShadow: "1px 1px 20px black",
      padding: "50px",
      marginTop: "40px",
      width: "700px",
      marginLeft: "435px",
      }}
      >
      {
        <h1 style={{ 
          background: "lightgrey", 
          borderRadius: "5px" }}>
          Chat Room
        </h1>
      }
      {messages.map((message, i) => (
        <p
          style={{
            background:
              "url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)",
            borderRadius: "10px",
            fontSize: "large",
            padding: "5px",
            fontWeight: "bold",
          }}
          key={i}
        >
          {" "}
          {message.user} says:"{message.message}"
        </p>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          value={newMessage}
          style={{
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "lightgrey",
          }}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            margin: "20px",
            backgroundColor: "lightgrey",
            fontSize: "large"
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
