// eslint-disable-next-line max-len
// implementing a "provider so the redux store is available to the rest of the application."
// eslint-disable-next-line max-len
// install react-redux packages - npm install react-redux or yarn add react-redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
// react-redux provider
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';

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
document.getElementById('root');
