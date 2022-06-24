import ACTIONS from "./actionTypes";

export const createMessageRequest = message => ({
    type: ACTIONS.CREATE_MESSAGE_REQUEST,
    payload: {message}
});

export const createMessageSuccess = message => ({
    type: ACTIONS.CREATE_MESSAGE_SUCCESS,
    payload: {message} 
});

export const createMessageError = error => ({
    type: ACTIONS.CREATE_MESSAGE_ERROR,
    payload: {error}
})

export const getMessagesRequest = () => ({
    type: ACTIONS.GET_MESSAGE_REQUEST
})

export const getMessagesSuccess = messages => ({
    type: ACTIONS.GET_MESSAGE_SUCCESS,
    payload: {messages}
});

export const getMessagesError = error => ({
    type: ACTIONS.GET_MESSAGE_ERROR,
    payload: {error}
})