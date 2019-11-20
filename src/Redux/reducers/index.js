import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
// import ticketReducer from './ticketReducer';

// calling the default reducer to create a link.

const rootReducer = combineReducers({ loginReducer });

export default rootReducer;
