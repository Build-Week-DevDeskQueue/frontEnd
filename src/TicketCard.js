import React from 'react';
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

export const TicketCard = (props) => {
  const classes = useStyles();
  const { title, description, type, tried, owner, assigned, date } = props.ticket;
  return (
    <div className="ticket-card">
      <h4>title {props.title}</h4>
      <p>description {props.description}</p>
      <h4>type {props.type}</h4>
      <h4>owner {props.owner}</h4>
      <p>date {props.date}</p>
    </div>
  );
};

export default TicketCard;