import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './navbar.css';

import Dashboard from './Dashboard';
import OpenIssues from './Open';
import ResolvedIssues from './Resolved';
import NewIssue from './New';

const AppRouter = (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/open" component={OpenIssues} />
    <Route exact path="/resolved" component={ResolvedIssues} />
    <Route exact path="/new" component={NewIssue} />
  </Switch>
);

export default AppRouter;
