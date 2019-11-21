import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  navRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [nav] = useState();

  return (
    <main>
      <div className={classes.navRoot}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink className="dashboard navBarLink" to="/">
                Dashboard
              </NavLink>
            </Typography>

            <Typography variant="h6" className={classes.title}>
              <NavLink className="open navBarLink" to="/open">
                Open Issues
              </NavLink>
            </Typography>

            <Typography variant="h6" className={classes.title}>
              <NavLink className="resolved navBarLink" to="/resolved">
                Resolved Issues
              </NavLink>
            </Typography>

            <Typography variant="h6" className={classes.title}>
              <NavLink className="new navBarLink" to="/new">
                New Issue
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </main>
  );
}
