import React from 'react';
import Main from './components/Main'
import Login from './components/Login'
import {Router} from '@reach/router'
import './App.css';
import RegistrationForm from './views/RegistrationForm'
import Scheduler from './components/Scheduler';


function App() {
  return (
    <div className="App" style={{background:"url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)", backgroundRepeat:"no-repeat, repeat", backgroundSize:"2000px", paddingBottom:"600px"}}>
 
    <Router>
      <Login path="/login"/>
      <Main path="/chat"/>
      <RegistrationForm path = '/'/>
    </Router>

    </div>
  )
}
export default App;