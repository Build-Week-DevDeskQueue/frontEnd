import React, { useState } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100
  },
  root: {
    padding: theme.spacing(3, 2),
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    marginLeft: 350,
    display: 'flex'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', password: '', token: '' });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(user.username);
    alert(user.password);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <form
          onSubmit={event => handleSubmit(event)}
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <div className={classes.centered}>
            <Typography variant="h1" gutterBottom>
              auxilium
            </Typography>
          </div>
          <div className={classes.centered}>
            <LockOpenOutlinedIcon />
          </div>
          <div className={classes.centered}>
            <TextField
              name="username"
              label="Username"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              value={user.username}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={classes.centered}>
            <TextField
              name="password"
              label="Password"
              type="password"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              value={user.password}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={classes.centered}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              className="classes.button"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default SignIn;