import { FETCHING_MESSAGE_SUCCESS } from '../actions';

//giving initial state data
const initialState = {
    'tickets': [
        {
            name: "Javascript",
            owner: 1,
            description: '',
            id: 0
        }
    ]};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_MESSAGE_SUCCESS:
            return{
                ...state, 
                tickets:action.payload
            }
            default:
            return state;
    }
};