import axios from 'axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

export function loginStart() {
  return dispatch => {
    axios
      .get('https://devdesk-backend.herokuapp.com/api/auth/login', creds)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}

export function loginSuccess() {
  return dispatch => {
    axios
      .post('https://devdesk-backend.herokuapp.com/api/auth/login', creds)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}
