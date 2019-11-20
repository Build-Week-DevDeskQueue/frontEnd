import { TICKET_NEW, TICKET_UPDATE, TICKET_DELETE, TICKET_ERROR } from '.';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// creating ticket
export function createTicket() {
  return dispatch => {
    dispatch({ type: TICKET_NEW });
    axiosWithAuth()
      .post('https://devdesk-backend.herokuapp.com/api/tickets/')
      .then(res => {
        dispatch({ type: TICKET_UPDATE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: TICKET_ERROR, payload: err });
      });
  };
}
// update ticket function
export function updateTicket() {
  return dispatch => {
    dispatch({ type: TICKET_UPDATE });
    axiosWithAuth()
      .put('https://devdesk-backend.herokuapp.com/api/tickets/:id')
      .then(res => {
        dispatch({ type: TICKET_UPDATE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: TICKET_UPDATE, payload: err });
      });
  };
}
// delete ticket function
export function deleteTicket() {
  return dispatch => {
    dispatch({ type: TICKET_DELETE });
    axiosWithAuth()
      .delete('https://devdesk-backend.herokuapp.com/api/tickets/:id')
      .then(res => {
        dispatch({ type: TICKET_DELETE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: TICKET_ERROR, payload: err });
      });
  };
}
