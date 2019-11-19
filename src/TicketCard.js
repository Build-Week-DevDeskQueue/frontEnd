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

export const TicketCard = props => {
  const classes = useStyles();
  //const { title, description, type, tried, owner, assigned, date } = props.ticket;
  return (
    <div className="ticket-card">
      <h4>Title: {props.title}</h4>
      <span> Description: {props.description} </span>
      <h4> Type: {props.type} </h4>
      <h4> Owner: {props.owner} </h4>
      <span> date: {props.date} </span>
    </div>
  );
};

export default TicketCard;