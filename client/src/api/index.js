import axios from 'axios';
import io from 'socket.io-client';
import { BASE_URL, SOCKET_EVENTS } from '../constants';
import store from '../store';
import * as ActionCreators from '../actions/actionCreators';

const httpClient = axios.create({
    baseURL: BASE_URL
});

const socket = io(`ws://${BASE_URL}`,{ transports: ["websocket"] });

socket.on(SOCKET_EVENTS.NEW_MESSAGE, (msg) => {
    store.dispatch(ActionCreators.createMessageSuccess(msg))
});

socket.on(SOCKET_EVENTS.NEW_MESSAGE_ERROR, () => {
    store.dispatch(ActionCreators.createMessageError(error))
});

export const getMessages = () => httpClient.get('/');

export const createMessage = message => socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message); 