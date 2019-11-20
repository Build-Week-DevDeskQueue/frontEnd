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
