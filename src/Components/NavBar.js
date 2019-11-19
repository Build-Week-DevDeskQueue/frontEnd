import React, { useState } from 'react';

import { BrowserRouter as Route, NavLink } from 'react-router-dom';

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
      {/*<Route exact path="/" component={Dashboard} />*/}
      {/*<Route exact path="/open" component={OpenIssues} />*/}
      {/*<Route exact path="/resolved" component={ResolvedIssues} />*/}
      {/*<Route exact path="/new" component={NewIssue} />*/}
    </main>
  );
}
