import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Router } from 'react-router-dom';
// react-redux provider
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';
=======
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import loginReducer from './redux/reducers/loginReducer';
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootReducer = combineReducers({ loginReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
>>>>>>> fa502965bf33787d5084506704107a9fcc2ca514

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
<<<<<<< HEAD
document.getElementById('root');
=======
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> fa502965bf33787d5084506704107a9fcc2ca514
