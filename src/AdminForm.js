import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
}));

export default function UserForm() {
  const classes = useStyles();

 
  return (
      <>
    <form className={classes.container} noValidate autoComplete="off">
    <TextField
          required
          id="filled-required"
          label="Title"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Description"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Type"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Tried"
          defaultValue="Trying to?"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
        id="filled-number"
        label="Owner"
        type="number"
        className={classes.textField}
        InputLabelProps={{
           shrink: true,
        }}
        margin="normal"
        variant="filled"
        />
        <TextField
        required
        id="filled-required"
        label="Assigned"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="filled"
        />
        <TextField
        id="date"
        label="Finalized Date"
        type="date"
        defaultValue={Date.now()}
        className={classes.textField}
        InputLabelProps={{
         shrink: true,
        }}
        />
        <Button variant="contained" color="primary" className={classes.button}>
        Resolve Ticket
        </Button>
    <br />
    </form>
    <br />
    </>
  );
}