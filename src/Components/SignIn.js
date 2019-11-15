import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-text"
            label="Username"
            type="text"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="standard-text"
            label="Password"
            type="text"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
