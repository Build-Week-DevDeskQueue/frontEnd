// implementing a "provider so the redux store is available to the rest of the application."
// install react-redux packages - (npm install react-redux) or (yarn add react-redux)

import React from 'react';
import ReactDOM from 'react-dom';
// importing the redux store
import { createStore } from 'redux';

// react-redux provider and store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// wrapping the application in the provider to render.
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
