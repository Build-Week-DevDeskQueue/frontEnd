import React from "react";
import TicketDetails from './TicketDetails';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
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


export default function AddTicketForm({ addTicket }) {
  const classes = useStyles();
        return (
          <>
          <form className={classes.container} noValidate autoComplete="off"  onSubmit={addTicket}>
              <TextField
                required
                id="filled-required"
                label="Title"
                className={classes.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Description"
                className={classes.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Type"
                className={classes.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Tried"
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
              className={classes.textField}
              margin="normal"
              variant="filled"
              />
              <TextField
              id="date"
              label="Submitted Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
               shrink: true,
              }}
              />
              <Button variant="contained" type="submit" color="primary" className={classes.button}>
              Submit Ticket
              </Button>
          </form>
          <br />
          <br />
          </>
        );
}