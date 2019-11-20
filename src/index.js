import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
//import { createStore, applyMiddleware, compose } from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import { reducer } from './store/reducers';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

//import store from '../store/index';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>,
  // </Provider>,
  document.getElementById('root')
);


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

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> fa502965bf33787d5084506704107a9fcc2ca514
