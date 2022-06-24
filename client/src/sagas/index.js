import {takeEvery} from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes';
import {getMessagesSaga, createMessageSaga} from './chatSaga';

export default function * rootSaga () {
    yield takeEvery(ACTIONS.GET_MESSAGE_REQUEST, getMessagesSaga);
    yield takeEvery(ACTIONS.CREATE_MESSAGE_REQUEST, createMessageSaga);
}