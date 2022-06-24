import ACTIONS from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    error: null,
    messages: []
}

export default function chatReducer(state = initialState, action) {
    switch (action.type) {

       case ACTIONS.CREATE_MESSAGE_SUCCESS: {
        const {payload: {message}} = action;
        return {
            ...state, 
            isFetching: false,
            messages: [...state.messages, message]
        }
       }
       case ACTIONS.GET_MESSAGE_ERROR:
       case ACTIONS.CREATE_MESSAGE_ERROR: {
        const {payload: {error}} = action;
        return {
            ...state,
            isFetching:false,
            error: error
        }
       }
    
       case ACTIONS.GET_MESSAGE_REQUEST: {
        return {
            ...state,
            isFetching: true
        }
       }
       case ACTIONS.GET_MESSAGE_SUCCESS: {
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