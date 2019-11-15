import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './App.css';
import UserForm from './UserForm';
import AdminForm from './AdminForm';
import LoginForm from './LoginForm';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './Dashboard';
import AppBar from './AppBar';


function App() {
  return (
    <div className="App">
    <AppBar style={{backgroundColor: '#212121'}} />
    <header>
      <h1>Get Started with DevDesk!</h1>
    </header>
    
    <LoginForm />
    <br />
    <h2>DASHBOARD</h2>
    <Dashboard />
    <br />
    <h4>Submit Ticket by Filling out Fields Below</h4>
    <UserForm />
    <br />
    <h2>Admin Ticket Resolution Form:</h2>
    <AdminForm />
    <br />
    <br />
    </div>
  );
}


export default App;
