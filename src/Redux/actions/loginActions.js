import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_ERROR } from './types';
// LOADING

export function loginStart() {
  return dispatch => {
    axios
      .get('https://devdesk-backend.herokuapp.com/api/auth/login')
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}

export function loginSuccess() {
  return dispatch => {
    axios
      .post('https://devdesk-backend.herokuapp.com/api/auth/login')
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}
