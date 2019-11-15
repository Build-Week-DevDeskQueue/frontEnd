import React, { useState } from 'react';
import './navbar.css';

import Dashboard from './dashboard';
import OpenIssues from './open';
import ResolvedIssues from './resolved';
import NewIssue from './new';

import { BrowserRouter as Route, NavLink } from 'react-router-dom';


export default function NavBar() {
    const [nav] = useState();
    return (
      <main>
        <div className='linkInfo'>
          <NavLink className='dashboard navBarLink' to='/'>Dashboard</NavLink>
          <NavLink className='open navBarLink' to='/character'>Open Issues</NavLink>
          <NavLink className='resolved navBarLink' to='/search'>Resolved Issues</NavLink>
          <NavLink className='new navBarLink' to='/search'>New Issue</NavLink>
        </div>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/open' component={OpenIssues}/>
        <Route exact path='/resolved' component={ResolvedIssues}/>
        <Route exact path='/new' component={NewIssue}/>
      </main>
    );
  }