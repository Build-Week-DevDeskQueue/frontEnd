import axios from 'axios';
import { TICKET_NEW, TICKET_ADD, TICKET_UPDATE, TICKET_ERROR } from './types';

// creating ticket
export function createTicket() {
  return dispatch => {
    dispatch({ type: TICKET_NEW });
    axios
      .post('https://devdesk-backend.herokuapp.com/api/tickets/')
      .then(res => {
        dispatch({ type: TICKET_UPDATE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: TICKET_ERROR, payload: err });
      });
  };
}
// delete ticket
export function deleteTicket() {
  return dispatch => {
    axios
      .post('https://devdesk-backend.herokuapp.com/api/tickets/:id')
      .then(res => {
        dispatch({ type: TICKET_UPDATE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: TICKET_UPDATE, payload: err });
      });
  };
}
