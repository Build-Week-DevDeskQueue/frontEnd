import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import loginReducer from './reducers/loginReducer';
// import ticketReducer from './redux/reducers/ticketReducer';

// calling the default reducer to create a link.
const rootReducer = combineReducers({ loginReducer });
// ticketReducer
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;