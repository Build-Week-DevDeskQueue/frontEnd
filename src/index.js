import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Dashboard from './dashboard';
import OpenIssues from './open';
import ResolvedIssues from './resolved';
import NewIssue from './new';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <ul>
            <li>
            <Link to="/">Dashboard</Link>
            </li>
            <li>
            <Link to="/open">Open Issues</Link>
            </li>
            <li>
            <Link to="/resolved">Resolved Issues</Link>
            </li>
            <li>
            <Link to="/new">New Issue</Link>
            </li>
        </ul>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/open' component={OpenIssues}/>
        <Route exact path='/resolved' component={ResolvedIssues}/>
        <Route exact path='/new' component={NewIssue}/>
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
