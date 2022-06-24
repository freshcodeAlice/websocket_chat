import ACTIONS from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    error: null,
    messages: []
}

export default function chatReducer(state = initialState, action) {
    switch (action.type) {

       case CREATE_MESSAGE_SUCCESS: {
        const {payload: {message}} = action;
        return {
            ...state, 
            isFetching: false,
            messages: [...state.messages, message]
        }
       }
       case GET_MESSAGE_ERROR:
       case CREATE_MESSAGE_ERROR: {
        const {payload: {error}} = action;
        return {
            ...state,
            error: error
        }
       }
    
       case GET_MESSAGE_REQUEST: {
        return {
            ...state,
            isFetching: true
        }
       }
       case GET_MESSAGE_SUCCESS: {
        const {payload: {message}} = action;
        return {
            ...state, 
            isFetching: false,
            messages: [...state.messages, message]
        }
       }
       default: {
        return state;
       }

    }
}