import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../dev_desk_logo.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  navRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navTitle: {
    flexGrow: 1
  },
  navColors: {
    backgroundColor: '#E4137B'
  },
  avatar: {
    margin: 10,
    width: 160,
    height: 60
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [nav] = useState();
  return (
    <main>
      <div className="navRoot">
        <AppBar position="static" className={classes.navColors}>
          <Toolbar>
            <Icon>
              <img
                src="../dev_desk_logo.png"
                alt="logo"
                height={60}
                width={160}
              />
            </Icon>
            <Typography variant="h6" className={classes.navTitle} to="/">
              <Button color="inherit">Dashboard</Button>
            </Typography>
            <Typography variant="h6" className={classes.navTitle} to="/open">
              <Button color="inherit">Open Issues</Button>
            </Typography>
            <Typography
              variant="h6"
              className={classes.navTitle}
              to="/resolved"
            >
              <Button color="inherit">Resolved Issue</Button>
            </Typography>
            <Typography variant="h6" className={classes.navTitle} to="/new">
              <Button color="inherit">New Issue</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      {/*<Route exact path="/" component={Dashboard} />*/}
      {/*<Route exact path="/open" component={OpenIssues} />*/}
      {/*<Route exact path="/resolved" component={ResolvedIssues} />*/}
      {/*<Route exact path="/new" component={NewIssue} />*/}
    </main>
  );
};

export default NavBar;
