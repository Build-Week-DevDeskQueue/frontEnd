<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import axios from 'axios';
import UserTickets from './UserTickets';
import Ticket from './Ticket';
import EditTicketForm from './EditTicketForm';
import AddTicketForm from './AddTicketForm';
import './App.css';
import LoginForm from './LoginForm';
import { PrivateRoute } from './routes/PrivateRoute';
import Dashboard from './Dashboard';
import AppBar from './AppBar';
import bluescreen from './bluescreen.jpg';
import delta from './delta.png';
import { axiosWithAuth } from './utils/axiosWithAuth';



const App = props => {
  // initial state 
  const [listTickets, setTicketList] = useState([]);


  //render list 
  const setTicket = tickets => {
    setTicketList(tickets);
  };

  //update 
  const updateTicket = ticket => {
    axiosWithAuth()
      .put(`https://devdesk-backend.herokuapp.com/api/tickets/${ticket.id}`, ticket)
      .then(result => {
        fetchTickets();
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  //display GET request from api
  const fetchTickets = () => {
    axiosWithAuth()
      .get("https://devdesk-backend.herokuapp.com/api/tickets/")
      .then(result => {
        setTicket(result.data);
        console.log('fetchTickets', result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  //delete and id of ticket using template literal
  const deleteTicket = id => {
    axiosWithAuth()
      .delete(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
      .then(result => {
        fetchTickets();
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  //add 
  const addTicket = (e, values) => {
    e.preventDefault()

    console.log('values', values)
    axiosWithAuth()
      .post("https://devdesk-backend.herokuapp.com/api/tickets/", values)
      .then(result => {
        //fetchTickets();
        //props.history.push("/");
        console.log('addTicket', result.data);
      })
      .catch(error => {
        console.log('error', error.response);
      });
  };

  return (
    <>
      <AppBar style={{ backgroundColor: '#212121' }} />
      <header>
        <h1>DevDesk Queue</h1>
        <h4>Get Started solving your coding questions below</h4>
      </header>
      <div className="logo"><img src={delta} height="160px" width="160px" /></div>
      <LoginForm />
      <br />
      <h2>DASHBOARD</h2>
      <Dashboard />
      <br />
      <img src={bluescreen} />
      <br />
      <br />
      <h1>Here is the Current Open Ticket List</h1>
      <br />
      <h4>Add, Update, Save, or Delete from Your Database.</h4>
      <Route
        exact path="/"
        render={props => {
          return (
            <UserTickets
              {...props}
              setTicketList={setTicketList}
              listTickets={listTickets}
            />
          );
        }}
      />
      <Route
        path="/tickets/:id"
        render={props => {
          return (
            <Ticket
              {...props}
              deleteTicket={deleteTicket}
            />
          );
        }}
      />
      <div className="add-ticket">
        <Link to="/update-ticket/:id">Update Ticket</Link>
      </div>
      <Route
        path="/update-ticket/:id"
        render={props => {
          return (
            <EditTicketForm
              {...props}
              listTickets={listTickets}
              updateTicket={updateTicket}
            />
          );
        }}
      />
      <div className="add-ticket">
        <Link to="/add-ticket">Add Ticket</Link>
      </div>
      <Route
        path="/add-ticket"
        render={props => {
          return <AddTicketForm
            {...props}
            addTicket={addTicket} />
        }}
      />
    </>
=======
import React from 'react';

import './App.css';
import SignIn from './components/SignIn';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <div>
      <SignIn />
      <AppRouter />
    </div>
>>>>>>> fa502965bf33787d5084506704107a9fcc2ca514
  );
};

export default App;
