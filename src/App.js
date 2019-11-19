import React from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <SignIn />
    </div>
  );
};

export default App;
