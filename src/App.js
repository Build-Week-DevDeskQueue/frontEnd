import React from 'react';

import './App.css';
import LoginForm from './components/LoginForm';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <div>
      <LoginForm />
      <AppRouter />
    </div>
  );
};

export default App;
