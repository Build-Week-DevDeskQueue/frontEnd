// eslint-disable-next-line max-len
// implementing a "provider so the redux store is available to the rest of the application."
// eslint-disable-next-line max-len
// install react-redux packages - npm install react-redux or yarn add react-redux
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// importing the redux store
import { createStore, applyMiddleware, combineReducers } from 'redux';
// react-redux provider
import { Provider } from 'react-redux';

import loginReducer from './redux/reducers/loginReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({ loginReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// wrapping the application in the provider to render.
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
