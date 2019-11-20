// import axios from 'axios';
// import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from './index';
// // LOADING

// export const login = (creds, props) => dispatch => {
//   dispatch({ type: LOADING });
//   return setTimeout(() => {
//     axios
//       .post('https://devdesk-backend.herokuapp.com/api/auth/login', creds)
//       .then(res => {
//         localStorage.setItem('token', res.data.token);
//         // eslint-disable-next-line no-console
//         console.log('login data', res);
//         dispatch({
//           type: LOGIN_SUCCESS
//         });
//         props.history.push('/');
//       })
//       // eslint-disable-next-line no-console
//       .catch(err => console.log(err.response));
//   }, 2000);
// };

// export const loginSuccess = (creds, props) => dispatch => {
//   dispatch({ type: LOADING });
//   return setTimeout(() => {
//     return (
//       axios
//         .post('https://devdesk-backend.herokuapp.com/api/auth/login', creds)
//         .then(res => {
//           localStorage.setItem('token', res.data.token);
//           dispatch({
//             type: LOGIN_SUCCESS
//           });
//           props.history.push('/');
//         })
//         // eslint-disable-next-line no-console
//         .catch(err => console.log(err.response))
//     );
//   }, 2000);
// };
