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
  );
};

export default App;
