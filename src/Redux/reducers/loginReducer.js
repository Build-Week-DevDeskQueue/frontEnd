import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/types';

const initialState = {
  isLoading: false,
  error: ''
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        error: ''
      };
    case LOGIN_ERROR:
      return {
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
