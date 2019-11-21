import React from 'react';

import './App.css';
import NewIssueForm from './Components/new';
import SignIn from './Components/SignIn';
import AppRouter from './Components/AppRouter';

const App = () => {
  return (
    <div>
      <NewIssueForm />
      <SignIn />
      <AppRouter />
    </div>
  );
};

export default App;
