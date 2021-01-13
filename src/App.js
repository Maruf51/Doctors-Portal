import React, { createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import { useState } from 'react';

export const NavbarContext = createContext()

function App() {
  const [darkNav, setDarkNav] = useState('home')
  const [appointmentDate, setAppointmentDate] = useState(new Date())
  console.log(appointmentDate)
  return (
    <NavbarContext.Provider value={[darkNav, setDarkNav], [appointmentDate, setAppointmentDate]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </NavbarContext.Provider>
  );
}

export default App;
