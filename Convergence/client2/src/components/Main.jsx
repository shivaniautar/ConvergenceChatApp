import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import io from 'socket.io-client';
import UserName from './UserName'
import Chat from './Chat'
import LogoutButton from './Logout'

export default function Main() {
  const [newUserName, setNewUserName]=useState ('');
  const [socket] = useState(() => io(':4000'));
  const setCurrentUser = (newUser) => {
    setNewUserName(newUser) }
   
  socket.emit('new user', newUserName)
  socket.on('name', user => {
    setNewUserName(user)
  })

  console.log(newUserName)
 
  return (
    <div>
      <LogoutButton/>
      <UserName onNewUser = {setCurrentUser}/><br/>
      <Chat user={newUserName}/>
    </div>
  )
}