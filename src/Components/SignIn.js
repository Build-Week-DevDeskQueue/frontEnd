import React from 'react';
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
  return (
    <div>
      <Paper className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
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
          <div className={classes.centered}>
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
          <div className={classes.centered}>
            <Button
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
