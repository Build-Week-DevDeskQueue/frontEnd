import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  const [nav] = useState();
  return (
    <main>
      <div className="linkInfo">
        <NavLink className="dashboard navBarLink" to="/">
          Dashboard
        </NavLink>
        <NavLink className="open navBarLink" to="/open">
          Open Issues
        </NavLink>
        <NavLink className="resolved navBarLink" to="/resolved">
          Resolved Issues
        </NavLink>
        <NavLink className="new navBarLink" to="/new">
          New Issue
        </NavLink>
      </div>
    </main>
  );
}
