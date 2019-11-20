import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard';
import OpenIssues from './open';
import ResolvedIssues from './resolved';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/open" component={OpenIssues} />
    <Route exact path="/resolved" component={ResolvedIssues} />
  </Switch>
);

export default AppRouter;
