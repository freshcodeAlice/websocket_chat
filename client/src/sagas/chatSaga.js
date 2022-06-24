import {put} from 'redux-saga/effects';
import * as ActionCreators from '../actions/actionCreators';
import * as API from '../api';


export function * getMessagesSaga(action) {
        try {
          const {data: {data}} = yield API.getMessages();
          yield put(ActionCreators.getMessagesSuccess(data));
        } catch(error) {
          yield put(ActionCreators.getMessagesError(error));
        }
}

export function * createMessageSaga(action) {
    try {   
        yield API.createMessage(action.payload.message)
    } catch(error) {
        yield put(ActionCreators.createMessageError(error))
    }
}